
import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/data.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewChecked {

  //------------
  displayedColumns: string[] = ['id', 'name', 'email', 'phone','website', 'posts'];
  dataSource: MatTableDataSource<User> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dataService: DataService) { }

  users: User[];

  ngOnInit(): void {
    this.dataService.getUsers()
    .subscribe(
      (res: User[]) =>
      {
        this.users = res?.map(p => (new User(p.id, p.name, p.email, p.phone, p.website)));
        this.dataSource.data =(this.users);
        // console.log('response', this.users);
      },
      error => {
        console.log('error', error);
      }
    );
  }
  ngAfterViewChecked() {
    if(!this.dataSource.sort){
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

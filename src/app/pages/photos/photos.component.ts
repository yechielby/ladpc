import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Photo } from './photo.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  providers: [{ provide: Window, useValue: window }]
})
export class PhotosComponent implements OnInit {

  @HostListener("window:scroll", []) onWindowScroll() {
    this.scrollFunction();
  }

  public value = '';
  photos: Photo[] = [];

  constructor(private dataService: DataService, @Inject(Window) private window: Window) { }

  ngOnInit(): void {
    this.dataService.getPhotos()
    .subscribe(
      (res: Photo[]) => {
        this.photos = res.map(p => (new Photo(p.id, p.title, p.url , p.thumbnailUrl)));
        // console.log('response', this.photos);
      },
      error => {
        console.log('error', error);
      }
    );
  }
  scrollFunction() {
    if (this.window.document.body.scrollTop > 20 || this.window.document.documentElement.scrollTop > 20) {
      this.window.document.getElementById("myBtn").style.display = "block";
    } else {
      this.window.document.getElementById("myBtn").style.display = "none";
    }
  }

  top() {
    this.window.document.body.scrollTop = 0;
    this.window.document.documentElement.scrollTop = 0
  }
}

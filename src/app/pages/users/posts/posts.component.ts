import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Post } from './post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  id: string;
  posts: Post[];

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params.id;

        this.dataService.getPostByUserID(this.id)
        .subscribe(
          (res: Post[]) =>
          {
            this.posts = res?.map(p => (new Post(p.id, p.title, p.body)));
            console.log('response', this.posts);
          },
          error => {
            console.log('error', error);
          }
        );
      }
    );
  }

}

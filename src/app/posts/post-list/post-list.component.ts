import { PostsService } from './../posts.service';
import { Component, OnDestroy, OnInit} from "@angular/core";
import {Post} from '../post.model';
import {Subscription} from 'rxjs';

@Component({
  selector:'app-post-list',
  templateUrl:'./post-list.component.html',
  styleUrls:['./post-list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy{
  /*posts=[
    {title:'First Post',content: 'This is the fisrt post'},
    {title:'Second Post',content: 'This is the fisrt post'},
    {title:'Third Post',content: 'This is the fisrt post'},
    {title:' Post',content: 'This is the fisrt post'}
  ]*/
  posts: Post[]=[];
  private postsSub: Subscription | undefined;

  constructor(public postsService: PostsService){}

  ngOnInit(){
    this.posts = this.postsService.getPosts();
    this.postsSub= this.postsService.getPostUpdateListener().subscribe((posts: Post[])=>{
      this.posts = posts;
    });
  }
  ngOnDestroy(){
    this.postsSub?.unsubscribe();
  }
}

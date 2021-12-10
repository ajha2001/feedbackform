import { PostsService } from './../posts.service';
import { Component} from "@angular/core";
import { NgForm } from "@angular/forms";
import {Post} from '../post.model';

@Component({
  selector:'app-post-create',
  templateUrl:'./post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent{
  enteredContent='';
  enteredTitle='';

  constructor(public postsService:PostsService){}

  onAddPost(form:NgForm)
  {
    if(form.invalid)
    {
      return;
    }
    const post: Post = {
      title:form.value.title,
      Description:form.value.Description,
      Water:form.value.Water
    };
    this.postsService.addPost(form.value.title, form.value.Description, form.value.Water);
    form.resetForm();
  }
}

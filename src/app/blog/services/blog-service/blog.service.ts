import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpClient: HttpClient)  { }

  getAllPosts() : Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/blog/get-post`);
  }

  getPostById(id: string) : Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/blog/get-post/:${id}`);
  }

  createPost(post: any) : Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/blog/create-post`, post);
  }

  updatePost(post: any) : Observable<any> {
    return this.httpClient.put(`${environment.apiUrl}/blog/update-post/:${post.id}`, post);
  }
}

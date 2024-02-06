import { HttpClient, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../utils/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/api/posts');
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`http://localhost:3000/api/posts/${id}`);
  }
}

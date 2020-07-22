import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    //Header for send
    'Content-Type': 'aplication/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  url: string = 'https://jsonplaceholder.typicode.com/todos';
  limit: string = '?_limit=10';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url + this.limit);
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.url}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.url, todo, httpOptions);
  }

  toggleCompleted(todo: Todo): Observable<any> {
    const urlEl = `${this.url}/${todo.id}`;

    return this.http.put(urlEl, todo, httpOptions);
  }
}

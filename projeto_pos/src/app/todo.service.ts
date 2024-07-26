import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  private apiUrl = "http://localhost:3001/todos";

  constructor(private http: HttpClient) {}

  getTodos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getTodoById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createTodo(todo: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, todo);
  }

  updateTodoById(id: string, todo: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${id}`, todo);
  }

  deleteTodoById(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}

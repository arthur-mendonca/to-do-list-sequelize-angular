import { Component } from "@angular/core";
import { TodoService } from "../todo.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-todo-create",
  standalone: true,
  imports: [],
  templateUrl: "./todo-create.component.html",
  styleUrl: "./todo-create.component.css",
})
export class TodoCreateComponent {
  todo: any = {};

  constructor(private todoService: TodoService, private router: Router) {}

  createTodo(): void {
    this.todoService.createTodo(this.todo).subscribe(() => {
      this.router.navigate(["/todos"]);
    });
  }
}

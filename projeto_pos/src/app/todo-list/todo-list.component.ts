import { TodoService } from "../todo.service";
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"],
  standalone: true,
  imports: [CommonModule],
})
export class TodoListComponent implements OnInit {
  todos: any[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data;
    });
  }
}

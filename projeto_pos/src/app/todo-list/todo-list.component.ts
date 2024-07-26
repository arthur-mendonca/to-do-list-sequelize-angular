import { TodoService } from "../todo.service";
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { Todo } from "../todo.model";
import { error } from "console";
import { MaterialModule } from "../material.module";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"],
  standalone: true,
  imports: [CommonModule, MaterialModule],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  query: string = "";
  filteredTodos: Todo[] = [];

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data;
      this.filterTodos();
    });
  }

  navigateToCreate(): void {
    this.router.navigate(["/todos/create"]);
  }

  navigateToDetail(id: string): void {
    if (id) {
      this.router.navigate([`/todos/${id.toString()}`]);
    } else {
      console.log("ID is undefined");
    }
  }

  toggleStatus(todo: Todo): void {
    todo.status = todo.status === "pending" ? "completed" : "pending";
    if (todo.id) {
      this.todoService.updateTodoById(todo.id.toString(), todo).subscribe(
        (response) => {
          console.log("Status updated successfully");
        },
        (error) => {
          console.log("Error updating status", error);
        }
      );
    }
  }

  filterTodos() {
    this.filteredTodos = this.todos.filter((todo) =>
      todo.task?.toLowerCase().includes(this.query.toLowerCase())
    );
  }
}

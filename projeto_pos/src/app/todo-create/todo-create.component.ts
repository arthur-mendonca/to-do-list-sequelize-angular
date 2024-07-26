import { Component, OnInit } from "@angular/core";
import { TodoService } from "../todo.service";
import { Router } from "@angular/router";
import { Todo } from "../todo.model";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material.module";

@Component({
  selector: "app-todo-create",
  standalone: true,
  imports: [FormsModule, CommonModule, MaterialModule],
  templateUrl: "./todo-create.component.html",
  styleUrls: ["./todo-create.component.css"],
})
export class TodoCreateComponent implements OnInit {
  todo: Todo = new Todo();

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit(): void {
    console.log("TodoCreateComponent initialized");
  }

  createTodo(): void {
    this.todoService.createTodo(this.todo).subscribe(
      (response) => {
        this.router.navigate(["/"]);
      },
      (error) => {
        console.log("Error ao criar To-do", error);
      }
    );
  }
}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { TodoService } from "../todo.service";
import { Todo } from "../todo.model";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-todo-detail",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./todo-detail.component.html",
  styleUrl: "./todo-detail.component.css",
})
export class TodoDetailComponent implements OnInit {
  todo: Todo = new Todo();

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get("id")!;

    this.todoService.getTodoById(id).subscribe((data) => {
      this.todo = data;
    });
  }

  updateTodo(): void {
    if (this.todo.id) {
      this.todoService
        .updateTodoById(this.todo.id.toString(), this.todo)
        .subscribe(
          (response) => {
            console.log("To-do updated successfully");
            this.router.navigate(["/"]);
          },

          (error) => {
            console.log("Error updating To-do", error);
          }
        );
    }
  }

  deleteTodo(): void {
    if (this.todo.id) {
      this.todoService.deleteTodoById(this.todo.id.toString()).subscribe(
        (response) => {
          console.log("To-do deleted successfully");
          this.router.navigate(["/"]);
        },
        (error) => {
          console.log("Error deleting To-do", error);
        }
      );
    }
  }
}

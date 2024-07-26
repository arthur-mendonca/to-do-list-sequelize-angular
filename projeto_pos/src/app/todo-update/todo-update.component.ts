import { Component, OnInit } from "@angular/core";
import { TodoService } from "../todo.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-todo-update",
  standalone: true,
  imports: [],
  templateUrl: "./todo-update.component.html",
  styleUrl: "./todo-update.component.css",
})
export class TodoUpdateComponent implements OnInit {
  todo: any = {};

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get("id")!;

    this.todoService.getTodoById(id).subscribe((data) => {
      this.todo = data;
    });
  }

  updateTodo(): void {
    const id: string = this.route.snapshot.paramMap.get("id")!;

    this.todoService.updateTodoById(id, this.todo).subscribe(() => {
      this.router.navigate(["/todos"]);
    });
  }
}

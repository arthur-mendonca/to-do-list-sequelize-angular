import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TodoService } from "../todo.service";

@Component({
  selector: "app-todo-detail",
  standalone: true,
  imports: [],
  templateUrl: "./todo-detail.component.html",
  styleUrl: "./todo-detail.component.css",
})
export class TodoDetailComponent implements OnInit {
  todo: any;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get("id")!;

    this.todoService.getTodoById(id).subscribe((data) => {
      this.todo = data;
    });
  }
}

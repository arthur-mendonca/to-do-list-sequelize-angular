import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { MaterialModule } from "./material.module";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, TodoListComponent, MaterialModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "projeto_pos";
}

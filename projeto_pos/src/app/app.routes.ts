import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoDetailComponent } from "./todo-detail/todo-detail.component";
import { TodoCreateComponent } from "./todo-create/todo-create.component";
import { TodoUpdateComponent } from "./todo-update/todo-update.component";

export const routes: Routes = [
  { path: "", component: TodoListComponent },
  {
    path: "todos/:id",
    component: TodoDetailComponent,
  },
  {
    path: "todos/create",
    component: TodoCreateComponent,
  },
  {
    path: "todos/update/:id",
    component: TodoUpdateComponent,
  },
];

export class Todo {
  constructor(
    public id?: number,
    public task?: string,
    public status?: "pending" | "completed",
    public createdAt?: string,
    public updatedAt?: string
  ) {}
}

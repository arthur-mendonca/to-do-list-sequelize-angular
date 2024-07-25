const Todos = require("../models/Todos");
const AppError = require("../errors/AppError");

class TodosService {
  async createTodo(task) {
    try {
      const todo = await Todos.create({ task });
      return todo;
    } catch (error) {
      console.log(error);
      throw new AppError(error.statusCode, error.message);
    }
  }

  async getAllTodos() {
    try {
      const todos = await Todos.findAll();
      return todos;
    } catch (error) {
      console.log(error);
      throw new AppError(error.statusCode, error.message);
    }
  }

  async getTodoById(id) {
    try {
      const todo = await Todos.findByPk(id);

      if (!todo) throw new AppError(404, "Todo not found");

      return todo;
    } catch (error) {
      console.log(error);
      throw new AppError(error.statusCode, error.message);
    }
  }

  async updateTodo(id, task, status) {
    try {
      const todo = await Todos.findByPk(id);

      if (!todo) throw new AppError(404, "Todo not found");

      const statusValues = ["pending", "completed"];

      if (status && !statusValues.includes(status))
        throw new AppError(400, "Invalid status value");

      await todo.update({ task, status });

      return todo;
    } catch (error) {
      console.log(error);
      throw new AppError(error.statusCode, error.message);
    }
  }

  async deleteTodo(id) {
    try {
      const todo = await Todos.findByPk(id);

      if (!todo) throw new AppError(404, "Todo not found");

      await todo.destroy();

      return todo;
    } catch (error) {
      console.log(error);
      throw new AppError(error.statusCode, error.message);
    }
  }
}

module.exports = new TodosService();

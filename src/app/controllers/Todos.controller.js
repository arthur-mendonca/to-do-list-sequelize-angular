const ErrorMsgManager = require("../../utils/ErrorMsg.manager");

const TodosService = require("../services/Todos.service");

class TodosController {
  async create(req, res) {
    try {
      const { task } = req.body;

      const todo = await TodosService.createTodo(task);

      res.status(201).json(todo);
    } catch (error) {
      return res
        .status(error.statusCode)
        .json(ErrorMsgManager.fixErrorMsg(error.message));
    }
  }

  async getAll(req, res) {
    try {
      const todos = await TodosService.getAllTodos();

      res.status(200).json(todos);
    } catch (error) {
      return res
        .status(error.statusCode)
        .json(ErrorMsgManager.fixErrorMsg(error.message));
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;

      const todo = await TodosService.getTodoById(id);

      return res.status(200).json(todo);
    } catch (error) {
      return res
        .status(error.statusCode)
        .json(ErrorMsgManager.fixErrorMsg(error.message));
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { task, status } = req.body;

      const todo = await TodosService.updateTodo(id, task, status);

      return res.status(200).json(todo);
    } catch (error) {
      return res
        .status(error.statusCode)
        .json(ErrorMsgManager.fixErrorMsg(error.message));
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const todo = await TodosService.deleteTodo(id);

      return res.status(200).json({ message: "Todo deleted" });
    } catch (error) {
      return res
        .status(error.statusCode)
        .json(ErrorMsgManager.fixErrorMsg(error.message));
    }
  }
}

module.exports = new TodosController();

const { Router } = require("express");
const routes = Router();

const TodosController = require("../controllers/Todos.controller");

routes.post("", TodosController.create);
routes.get("", TodosController.getAll);
routes.get("/:id", TodosController.getById);
routes.patch("/:id", TodosController.update);
routes.delete("/:id", TodosController.delete);

module.exports = routes;

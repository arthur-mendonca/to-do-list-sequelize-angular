const { Router } = require("express");
const routes = Router();

const TodosRoutes = require("./Todos.routes");

routes.use("/todos", TodosRoutes);

module.exports = routes;

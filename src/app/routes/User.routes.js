const { Router } = require("express");
const routes = Router();

const UsersController = require("../controllers/Users.controller");
const authMiddleware = require("../middlewares/MiddlewareAuth");

routes.get(
    "",
    authMiddleware.isAuthenticated,
    UsersController.getUserDataTokenBased
);

routes.post("", UsersController.createUser);

module.exports = routes;

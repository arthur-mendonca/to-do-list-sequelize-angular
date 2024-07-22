const { Router } = require("express");
const routes = Router();

const AuthController = require("../controllers/Auth.controller");

routes.post("/login", AuthController.login);
routes.post("/recover", AuthController.recoverPassword);
routes.post("/verify", AuthController.validateCode);
routes.patch("/password", AuthController.updatePassword);

module.exports = routes;

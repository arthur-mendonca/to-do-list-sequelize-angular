const { Router } = require("express");
const routes = Router();

const AuthRoutes = require("./Auth.routes");
const UserRoutes = require("./User.routes");

routes.use("/auth", AuthRoutes);
routes.use("/user", UserRoutes);

module.exports = routes;

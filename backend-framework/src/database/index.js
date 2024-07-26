const sequelize = require("sequelize");

const connectionDatabase = require("../config/database");

const Todos = require("../app/models/Todos");

const models = [Todos];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new sequelize(connectionDatabase);
    models.map((model) => model.init(this.connection));
  }
}

module.exports = new Database();

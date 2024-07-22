const sequelize = require("sequelize");

const connectionDatabase = require("../config/database");

const User = require("../app/models/Users");
const Codes = require("../app/models/Codes")

const models = [User, Codes];

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

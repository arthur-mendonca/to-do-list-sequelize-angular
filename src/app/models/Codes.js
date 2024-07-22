const { Sequelize, Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

class Codes extends Model {
    static init(sequelize) {
        super.init(
            {
                mail: Sequelize.STRING,
                code: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );

        this.addHook("beforeSave", async (code) => (code.id = uuidv4()));
    }
}

module.exports = Codes;

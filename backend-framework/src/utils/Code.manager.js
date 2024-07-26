const { v4: uuidv4 } = require("uuid");

const Codes = require("../app/models/Codes");

class CodeManager {
    async generate(mail) {
        const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

        let code = "";

        for (let i = 0; i < 5; i++) {
            let randomIndex = Math.floor(Math.random() * characters.length);
            code += characters.charAt(randomIndex);
        }

        const newCode = await Codes.findOrCreate({
            where: {
                mail,
            },
            defaults: {
                id: uuidv4(),
                mail,
                code,
            },
        });

        return newCode[0].dataValues.code;
    }
}

module.exports = new CodeManager();

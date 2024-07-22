const validate = require("validate.js");

const constraints = require("./Constraints");

class UserSchemas {
    createUserSchema(mail, password, name, photoString) {
        const isInvalid = validate(
            { mail, password, name, photoString },
            {
                mail: constraints.mail,
                password: constraints.password,
                name: constraints.name,
                photoString: constraints.photoString,
            }
        );

        return isInvalid;
    }

    loginSchema(mail, password) {
        const isInvalid = validate(
            { mail, password },
            {
                mail: constraints.mail,
                password: constraints.password,
            }
        );

        return isInvalid;
    }

    recoverPasswordSchema(mail) {
        const isInvalid = validate({ mail }, { mail: constraints.mail });

        return isInvalid;
    }
}

module.exports = new UserSchemas();

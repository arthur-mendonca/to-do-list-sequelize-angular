const validate = require("validate.js");

const constraints = require("./Constraints");

class AuthSchemas {
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

    validateCodeSchema(mail, code) {
        const isInvalid = validate(
            { mail, code },
            { mail: constraints.mail, code: constraints.code }
        );

        return isInvalid;
    }

    updatePasswordSchema(mail, password, code) {
        const isInvalid = validate(
            { mail, password, code },
            {
                mail: constraints.mail,
                password: constraints.password,
                code: constraints.code,
            }
        );

        return isInvalid;
    }
}

module.exports = new AuthSchemas();

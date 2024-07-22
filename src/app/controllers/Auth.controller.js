const AppError = require("../errors/AppError");

const AuthService = require("../services/Auth.service");

const AuthSchemas = require("../schemas/Auth.schemas");

class AuthController {
    async login(req, res) {
        try {
            const { mail, password } = req.body;

            const isInvalid = AuthSchemas.loginSchema(mail, password);

            if (isInvalid) throw new AppError(400, isInvalid);

            const response = await AuthService.login(mail, password);

            return res.status(200).json(response);
        } catch (error) {
            return res
                .status(error.statusCode)
                .json({ message: error.message });
        }
    }

    async recoverPassword(req, res) {
        try {
            const { mail } = req.body;

            const isInvalid = AuthSchemas.recoverPasswordSchema(mail);

            if (isInvalid) throw new AppError(400, isInvalid);

            const response = await AuthService.recoverPassword(mail);

            return res.status(200).json(response);
        } catch (error) {
            return res
                .status(error.statusCode)
                .json({ message: error.message });
        }
    }

    async validateCode(req, res) {
        try {
            const { mail, code } = req.body;

            const isInvalid = AuthSchemas.validateCodeSchema(mail, code);

            if (isInvalid) throw new AppError(400, isInvalid);

            const response = await AuthService.validateCode(mail, code);

            return res.status(200).json(response);
        } catch (error) {
            return res
                .status(error.statusCode)
                .json({ message: error.message });
        }
    }

    async updatePassword(req, res) {
        try {
            const { mail, password, code } = req.body;

            const isInvalid = AuthSchemas.updatePasswordSchema(
                mail,
                password,
                code
            );

            if (isInvalid) throw new AppError(400, isInvalid);

            const response = await AuthService.updatePassword(
                mail,
                password,
                code
            );

            return res.status(200).json(response);
        } catch (error) {
            return res
                .status(error.statusCode)
                .json({ message: error.message });
        }
    }
}

module.exports = new AuthController();

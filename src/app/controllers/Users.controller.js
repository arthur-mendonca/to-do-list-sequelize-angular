const AppError = require("../errors/AppError");

const UsersService = require("../services/Users.service");

const UserSchemas = require("../schemas/User.schemas");

class UsersController {
    async createUser(req, res) {
        try {
            const { mail, password, name, photoString } = req.body;

            const isInvalid = UserSchemas.createUserSchema(
                mail,
                password,
                name,
                photoString
            );

            if (isInvalid) throw new AppError(400, isInvalid);

            const response = await UsersService.createUser(
                mail,
                password,
                name,
                photoString
            );

            return res.status(201).json(response);
        } catch (error) {
            return res
                .status(error.statusCode || 400)
                .json({ message: error.message });
        }
    }

    async getUserDataTokenBased(req, res) {
        try {
            const { userId } = req;

            if (!userId) throw new AppError(400, "Dados ausentes");

            const response = await UsersService.getUserDataTokenBased(userId);

            return res.status(200).json(response);
        } catch (error) {
            return res
                .status(error.statusCode)
                .json({ message: error.message });
        }
    }
}

module.exports = new UsersController();

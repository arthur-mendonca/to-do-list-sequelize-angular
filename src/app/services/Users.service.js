const Users = require("../models/Users");

const AppError = require("../errors/AppError");
const FirebaseManager = require("../../utils/Firebase.manager");

class UsersService {
    async findUserToLogin(mail) {
        // Observe que esse método também retorna o password junto,
        // NÃO deve ser utilizado para outros fins além de autenticação
        const user = await Users.findOne({
            where: {
                mail,
            },
        });

        if (user) return user;

        return false;
    }

    async findUserByMail(mail) {
        const user = await Users.findOne({
            where: {
                mail,
            },
            attributes: {
                exclude: ["password"],
            },
        });

        if (user) return user;

        return false;
    }

    async findUserById(id) {
        const user = await Users.findOne({
            where: {
                id,
            },
            attributes: {
                exclude: ["password"],
            },
        });

        if (user) return user;

        return false;
    }

    async createUser(mail, password, name, photoString) {
        try {
            const userAlreadyExist = await this.findUserByMail(mail);

            if (userAlreadyExist)
                throw new AppError(409, "Email já cadastrado");

            const profilePhoto = await FirebaseManager.sendFileToFirebase(
                "example-url",
                photoString,
                "image/jpeg"
            );

            await Users.create({
                mail,
                password,
                name,
                profilePhoto
            });

            return { message: "Usuário criado com sucesso" };
        } catch (error) {
            throw new AppError(error.statusCode, error.message);
        }
    }

    async getUserDataTokenBased(userId) {
        try {
            const user = await this.findUserById(userId);

            if (!user) throw new AppError(404, "Usuário não encontrado");

            return { user };
        } catch (error) {
            throw new AppError(error.statusCode, error.message);
        }
    }
}

module.exports = new UsersService();

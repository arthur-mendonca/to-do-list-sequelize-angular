const bcrypt = require("bcrypt");

const AppError = require("../errors/AppError");
const Templates = require("../templates/Templates");

const Codes = require("../models/Codes");

const CodeManager = require("../../utils/Code.manager");
const TokenManager = require("../../utils/Token.manager");
const NodeMailerManager = require("../../utils/NodeMailer.manager");
const MethodsManager = require("../../utils/Methods.manager");

const UsersService = require("./Users.service");

class AuthService {
    async login(mail, password) {
        try {
            const user = await UsersService.findUserToLogin(mail);

            if (!user) throw new AppError(400, "Dados inválidos");

            if (!(await bcrypt.compare(password, user.password)))
                throw new AppError(400, "Dados inválidos");

            const token = TokenManager.generate(
                user.id,
                process.env.CLIENT_SECRET_KEY,
                "7d"
            );

            return { token };
        } catch (error) {
            throw new AppError(error.statusCode, error.message);
        }
    }

    async validateCode(mail, code) {
        try {
            const validCode = await Codes.findOne({
                where: {
                    mail,
                    code,
                },
            });

            if (!validCode) throw new AppError(404, "Código inválido");

            return { message: "Código validado com sucesso" };
        } catch (error) {
            throw new AppError(error.statusCode, error.message);
        }
    }

    async recoverPassword(mail) {
        try {
            const user = await UsersService.findUserByMail(mail);

            if (!user) throw new AppError(404, "Usuário não encontrado");

            await MethodsManager.scheduleDelete(
                Codes,
                { where: { mail } },
                new Date(Date.now() + 10 * 60 * 1000)
            );

            const code = await CodeManager.generate(mail);
            const color = "";
            const logoUrl = "";

            // Abaixo são os 4 parâmetros que o método espera receber
            // code -> A variável code
            // receiver -> O mail que chega por parâmetro
            // color -> A variável color (você deve setar uma cor manualmente)
            // logoUrl  -> A variável logoUrl (você deve setar uma url manualmente)
            const template = Templates.recoverPasswordTemplate(
                code,
                mail,
                color,
                logoUrl
            );

            const subject = "Recuperação de senha";

            await NodeMailerManager.sendMail(mail, subject, template);

            return { message: "Código enviado com sucesso" };
        } catch (error) {
            throw new AppError(error.statusCode, error.message);
        }
    }

    async updatePassword(mail, password, code) {
        try {
            await this.validateCode(mail, code);

            const user = await UsersService.findUserByMail(mail);

            await user.update({
                password,
            });

            return { message: "Senha atualizada com sucesso" };
        } catch (error) {
            throw new AppError(error.statusCode, error.message);
        }
    }
}

module.exports = new AuthService();

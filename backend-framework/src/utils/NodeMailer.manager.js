const AppError = require("../app/errors/AppError")
const NodeMailer = require("nodemailer");

class NodeMailerManager {
    async sendMail(receiver, subject, template) {
        try {
            // Você deve setar a variável "from" com o email da empresa dona do projeto
            const from = process.env.NODEMAILER_BUSINESS_MAIL;

            const transporter = NodeMailer.createTransport({
                host: process.env.NODEMAILER_HOST,
                port: Number(process.env.NODEMAILER_PORT),
                auth: {
                    user: process.env.NODEMAILER_USER,
                    pass: process.env.NODEMAILER_PASS,
                },
            });

            await transporter
                .sendMail({
                    from,
                    to: receiver,
                    subject,
                    html: template,
                })
                .then((res) => res)
                .catch((err) => err);
        } catch (error) {
            throw new AppError(error.statusCode, error.message);
        }
    }
}

module.exports = new NodeMailerManager();

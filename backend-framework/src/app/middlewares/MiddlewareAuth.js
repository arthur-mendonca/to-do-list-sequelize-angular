const jwt = require("jsonwebtoken");

class MiddlewareAuth {
    static async isAuthenticated(req, res, next) {
        const { authorization } = req.headers;

        if (!authorization)
            return res.status(401).send({ message: "Token não existe" });

        const parts = authorization.split(" ");

        if (parts.length !== 2)
            return res.status(401).send({ message: "Token error" });

        const [scheme, token] = parts;

        if (!/^Bearer$/i.test(scheme))
            return res.status(401).send({ message: "Token mal formatado" });

        jwt.verify(token, process.env.CLIENT_SECRET_KEY, (err, decoded) => {
            if (err) return res.status(401).send({ message: "Token inválido" });

            req.userId = decoded.sub;
            return next();
        });
    }
}

module.exports = MiddlewareAuth;

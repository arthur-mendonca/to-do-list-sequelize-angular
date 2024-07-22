const constraints = {
    mail: {
        presence: {
            allowEmpty: false,
            message: "deve ser informado",
        },
        type: {
            type: "string",
            message: "deve ser uma string",
        },
        email: {
            email: true,
            message: "deve ser um email válido",
        },
        length: {
            maximum: 255,
            message: "deve ter no máximo 255 carácteres",
        },
    },

    password: {
        presence: {
            allowEmpty: false,
            message: "deve ser informado",
        },
        type: {
            type: "string",
            message: "deve ser uma string",
        },
        length: {
            minimum: 8,
            message: "deve ter mais de 8 carácteres",
        },
    },

    name: {
        presence: {
            allowEmpty: false,
            message: "deve ser informado",
        },
        type: {
            type: "string",
            message: "deve ser uma string",
        },
    },

    photoString: {
        presence: {
            allowEmpty: false,
            message: "deve ser informado",
        },
        type: {
            type: "string",
            message: "deve ser uma string",
        },
    },

    code: {
        presence: {
            allowEmpty: false,
            message: "deve ser informado",
        },
        type: {
            type: "string",
            message: "deve ser uma string",
        },
        length: {
            is: 5,
            message: "deve conter 5 carácteres",
        },
    },
};

module.exports = constraints;

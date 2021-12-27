class InvalidField extends Error {
    constructor(campo) {
        const mensagem = `O campo ${campo} está inválido`;
        super(mensagem);
        this.name = 'InvalidField';
        this.idErro = 0;
    }
}

module.exports = InvalidField;
class NotFound extends Error {
    constructor() {
        super('Registro não encontrado');
        this.name = 'NotFound';
        this.idErro = 2;
    }
}

module.exports = NotFound;
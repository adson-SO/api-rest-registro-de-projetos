class DataNotProvided extends Error {
    constructor() {
        super('Não foram fornecidos dados válidos para atualizar!');
        this.name = 'DataNotProvided';
        this.idErro = 1;
    }
}

module.exports = DataNotProvided;
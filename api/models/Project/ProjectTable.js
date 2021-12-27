const Model = require('./ProjectTableModel'); 

module.exports = {
    listar() {
        return Model.findAll();
    },

    inserir(dados) {
        return Model.create(dados);
    }
}
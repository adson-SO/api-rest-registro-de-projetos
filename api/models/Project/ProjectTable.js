const Model = require('./ProjectTableModel'); 

module.exports = {
    listar() {
        return Model.findAll();
    },

    adiciona(dados) {
        return Model.create(dados);
    },

    buscarPorId(id) {
        return Model.findOne({
            where: {
                id: id
            }
        });
    },

    atualizar(id, dados) {
        return Model.update(dados, 
            {
                where: {
                    id: id
                }
            });
    },

    apagar(id) {
        return Model.destroy({
            where: {
                id: id
            }
        });
    }
}
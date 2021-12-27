const NotFound = require('../../errors/NotFound');
const Model = require('./ProjectTableModel'); 

module.exports = {
    listar() {
        return Model.findAll();
    },

    adiciona(dados) {
        return Model.create(dados);
    },

    async buscarPorId(id) {
        const encontrado = await Model.findOne({
            where: {
                id: id
            }
        });

        if(!encontrado) {
            throw new NotFound();
        }

        return encontrado;
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
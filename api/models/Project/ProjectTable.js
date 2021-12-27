const Model = require('./ProjectTableModel'); 
const NotFound = require('../../errors/NotFound');
const TaskModel = require('./Task/TaskTableModel');

module.exports = {
    listar() {
        return Model.findAll({
            include: [{
                model: TaskModel,
                required: true
            }]
        });
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
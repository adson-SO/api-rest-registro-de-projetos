const Model = require('./TaskTableModel');

module.exports = {
    listar(idProject) {
        return Model.findAll({
            where: { project: idProject }
        });
    },

    inserir(dados) {
        return Model.create(dados);
    },

    remover(idTask, idProject) {
        return Model.destroy({
            where: {
                id: idTask,
                project: idProject
            }
        })
    }
}
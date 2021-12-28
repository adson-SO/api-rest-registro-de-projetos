const NotFound = require('../../../errors/NotFound');
const Model = require('./TaskTableModel');

module.exports = {
    listar(idProject) {
        return Model.findAll({
            where: { projectId: idProject }
        });
    },

    inserir(dados) {
        return Model.create(dados);
    },

    async buscarPorId(idTask, idProject) {
        const encontrado = await Model.findOne({
            where: {
                id: idTask,
                projectId: idProject
            }
        });

        if(!encontrado) {
            throw new NotFound();
        }

        return encontrado;
    },

    atualizar(idTask, idProject, dados) {
        return Model.update(dados,
            {
                where: {
                    id: idTask,
                    projectId: idProject
                }
            });
    },

    remover(idTask, idProject) {
        return Model.destroy({
            where: {
                id: idTask,
                projectId: idProject
            }
        })
    }
}
const InvalidField = require('../errors/InvalidField');
const TaskTable = require('../models/Project/Task/TaskTable');

class Task {
    constructor({ id, title, taskRelevance, completed, createdAt, updatedAt, projectId }) {
        this.id = id;
        this.title = title;
        this.taskRelevance = taskRelevance;
        this.completed = completed;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.projectId = projectId;
    }

    async criar() {
        this.validar();
        const resultado = await TaskTable.inserir({
            title: this.title,
            taskRelevance: this.taskRelevance,
            completed: this.completed,
            projectId: this.projectId
        })

        this.id = resultado.id;
        this.createdAt = resultado.createdAt;
        this.updatedAt = resultado.updatedAt;
    }

    async buscarPorId() {
        const task = await TaskTable.buscarPorId(this.id, this.projectId);
        this.title = task.title;
        this.taskRelevance = task.taskRelevance;
        this.completed = task.completed;
        this.createdAt = task.createdAt;
        this.updatedAt = task.updatedAt;
    }

    async atualizar() {
        await TaskTable.buscarPorId(this.id, this.projectId);
        this.validar();
        const dadosParaAtualizar = { title: this.title, taskRelevance: this.taskRelevance, completed: this.completed };
        TaskTable.atualizar(this.id, this.projectId, dadosParaAtualizar);
    }

    async deletar() {
        return TaskTable.remover(this.id, this.projectId);
    }

    validar() {
        
        if(typeof this.title !== 'string' || this.title.length === 0) {
            throw new InvalidField('title');
        }

        if(typeof this.taskRelevance !== 'number' || this.taskRelevance.valueOf() === 0) {
            throw new InvalidField('taskRelevance');
        }

        if(typeof this.completed !== 'boolean') {
            throw new InvalidField('completed');
        }
    }
}

module.exports = Task;
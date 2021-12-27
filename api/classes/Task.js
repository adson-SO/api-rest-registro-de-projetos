const InvalidField = require('../errors/InvalidField');
const TaskTable = require('../models/Project/Task/TaskTable');

class Task {
    constructor({ id, title, taskRelevance, completed, project, createdAt, updatedAt }) {
        this.id = id;
        this.title = title;
        this.taskRelevance = taskRelevance;
        this.completed = completed;
        this.project = project;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    async criar() {
        this.validar();
        const resultado = await TaskTable.inserir({
            title: this.title,
            taskRelevance: this.taskRelevance,
            completed: this.completed,
            project: this.project
        })

        this.id = resultado.id;
        this.createdAt = resultado.createdAt;
        this.updatedAt = resultado.updatedAt;
    }

    async deletar() {
        return TaskTable.remover(this.id, this.project);
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
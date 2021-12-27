const ProjectTable = require('../models/Project/ProjectTable');

class Project {
    constructor({ id, title, description, task, createdAt, updatedAt }) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.task = task;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    async criar() {
        const dados = await ProjectTable.adiciona({
            title: this.title,
            description: this.description,
            task: this.task
        });

        this.id = dados.id;
        this.createdAt = dados.createdAt;
        this.updatedAt = dados.updatedAt;
    }

    async buscarPorId() {
        const project = await ProjectTable.buscarPorId(this.id);
        this.title = project.title;
        this.description = project.description;
        this.task = project.task;
        this.createdAt = project.createdAt;
        this.updatedAt = project.updatedAt;
    }

    async atualizar() {
        const dados = {
            title: this.title,
            description: this.description,
            tasks: this.task,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };

        await ProjectTable.atualizar(this.id, dados);
    }

    deletar() {
        return ProjectTable.apagar(this.id);
    }
}

module.exports = Project;
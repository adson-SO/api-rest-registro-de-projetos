const ProjectTable = require('../models/Project/ProjectTable');

class Project {
    constructor({ id, title, description, createdAt, updatedAt }) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    async criar() {
        const dados = await ProjectTable.adiciona({
            title: this.title,
            description: this.description
        });

        this.id = dados.id;
        this.createdAt = dados.createdAt;
        this.updatedAt = dados.updatedAt;
    }

    async buscarPorId() {
        const project = await ProjectTable.buscarPorId(this.id);
        this.title = project.title;
        this.description = project.description;
        this.createdAt = project.createdAt;
        this.updatedAt = project.updatedAt;
    }

    async atualizar() {
        const dados = {
            title: this.title,
            description: this.description,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };

        await ProjectTable.atualizar(this.id, dados);
    }

    async deletar() {
        await ProjectTable.apagar(this.id);
    }
}

module.exports = Project;
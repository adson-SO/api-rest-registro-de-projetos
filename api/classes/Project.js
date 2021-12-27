const ProjectTable = require('../models/Project/ProjectTable');

class Project {
    constructor({id, title, description, createdAt, updatedAt}) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    async criar() {
        const dados = await ProjectTable.inserir({
            title: this.title,
            description: this.description
        });

        this.id = dados.id;
        this.createdAt = dados.createdAt;
        this.updatedAt = dados.updatedAt;
    }
}

module.exports = Project;
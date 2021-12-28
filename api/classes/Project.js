const DataNotProvided = require('../errors/DataNotProvided');
const InvalidField = require('../errors/InvalidField');
const ProjectTable = require('../models/Project/ProjectTable');
const Task = require('./Task');

class Project {
    constructor({ id, title, description, createdAt, updatedAt }) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    async criar() {
        this.validar();
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
        await ProjectTable.buscarPorId(this.id);
        const campos = ['title', 'description'];
        const dadosParaAtualizar = {};

        campos.forEach((campo) => {
            const valor = this[campo];

            if(typeof valor === 'string' && valor.length > 0) {
                dadosParaAtualizar[campo] = valor;
            }

        });

        if(Object.keys(dadosParaAtualizar).length === 0) {
            throw new DataNotProvided();
        }

        ProjectTable.atualizar(this.id, dadosParaAtualizar);
    }

    deletar() {
        return ProjectTable.apagar(this.id);
    }

    validar() {
        const campos = ['title', 'description'];

        campos.forEach(campo => {
            const valor = this[campo];

            if(typeof valor !== 'string' || valor.length === 0) {
                throw new InvalidField(campo);
            }
        });
    }
}

module.exports = Project;
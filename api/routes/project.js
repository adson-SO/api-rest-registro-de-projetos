const router = require('express').Router();
const ProjectTable = require('../models/Project/ProjectTable');
const Project = require('../classes/Project');

router.get('/project', async (req, res) => {
    const resultados = await ProjectTable.listar();
    res.status(200).send(resultados);
});

router.post('/project', async (req, res) => {
    const dados = req.body;
    const project = new Project(dados);
    await project.criar();

    res.status(201).send(project);
});

router.get('/project/:id', async (req, res) => {
    const idProject = req.params.id;
    const project = new Project({ id: idProject });
    await project.buscarPorId();

    res.status(200).send(project);
});

router.put('/project/:id', async (req, res) => {
    const idProject = req.params.id;
    const dadosRecebidos = req.body;
    const dados = Object.assign({}, { id: idProject }, dadosRecebidos);
    const project = new Project(dados);
    await project.atualizar();

    res.status(200).end();
});

router.delete('/project/:id', async (req, res) => {
    const idProject = req.params.id;
    const project = new Project({ id: idProject });
    await project.deletar();

    res.status(204).end();
});

module.exports = router;
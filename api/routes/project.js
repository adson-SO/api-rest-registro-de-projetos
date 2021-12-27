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
})

module.exports = router;
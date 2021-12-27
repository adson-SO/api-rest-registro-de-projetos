const router = require('express').Router();
const ProjectTable = require('../models/Project/ProjectTable');
const Project = require('../classes/Project');

router.get('/project', async (req, res) => {
    const resultados = await ProjectTable.listar()
    .then(resultado => {res.status(200).send(
        JSON.stringify(resultado))
    });
    
});

router.post('/project', async (req, res, next) => {
    try {
        const dados = req.body;
        const project = new Project(dados);
        await project.criar();
    
        res.status(201).send(JSON.stringify(project));
    } catch(erro) {
        next(erro)
    }
});

router.get('/project/:idProject', async (req, res, next) => {
    try {
        const idProject = req.params.idProject;
        const project = new Project({ id: idProject });
        await project.buscarPorId();
    
        res.status(200).send(JSON.stringify(project));
    } catch(erro) {
        next(erro);
    }
});

router.put('/project/:idProject', async (req, res, next) => {
    try {
        const idProject = req.params.idProject;
        const dadosRecebidos = req.body;
        const dados = Object.assign({}, { id: idProject }, dadosRecebidos);
        const project = new Project(dados);
        await project.atualizar();
    
        res.status(200).end();
    } catch(erro) {
        next(erro);
    }
});

router.delete('/project/:idProject', async (req, res, next) => {
    try {
        const idProject = req.params.idProject;
        const project = new Project({ id: idProject });
        await project.buscarPorId();
        await project.deletar();
    
        res.status(204).end();
    } catch(erro) {
        next(erro);
    }
});

const taskRouter = require('./task');

const verifyProject = async (req, res, next) => {
    try {
        const idProject = req.params.idProject;
        const project = new Project({ id: idProject });
        await project.buscarPorId();
        req.project = project;
        next();
    } catch(erro) {
        next(erro);
    }
} 

router.use('/project/:idProject/task', verifyProject, taskRouter);

module.exports = router;
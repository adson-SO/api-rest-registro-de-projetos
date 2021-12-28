const router = require('express').Router({ mergeParams: true });
const TaskTable = require('../models/Project/Task/TaskTable');
const Task = require('../classes/Task');

router.get('/', async (req, res) => {
    const tasks = await TaskTable.listar(req.project.id);

    res.status(200).send(JSON.stringify(tasks));
});

router.post('/', async (req, res, next) => {
    try {
        const idProject = req.project.id;
        const dadosRecebidos = req.body;
        const dados = Object.assign({}, { projectId: idProject }, dadosRecebidos);
        const task = new Task(dados);
        await task.criar();
        res.status(201).send(
            JSON.stringify(task)
        );
    } catch(erro) {
        next(erro);
    }
});

router.get('/:idTask', async (req, res, next) => {
    try {
        const idProject = req.project.id;
        const idTask = req.params.idTask;
        const dados = {
            id: idTask,
            projectId: idProject
        };
        const task = new Task(dados);
        await task.buscarPorId();

        res.status(200).send(
            JSON.stringify(task)
        );
    } catch(erro) {
        next(erro);
    }
})

router.put('/:idTask', async (req, res, next) => {
    try {
        const idTask = req.params.idTask;
        const idProject = req.project.id;
        const dadosRecebidos = req.body;
        const dados = Object.assign({}, { id: idTask }, { projectId: idProject }, dadosRecebidos);
        const task = new Task(dados);
        await task.atualizar();
    
        res.status(200).end();
    } catch(erro) {
        next(erro);
    }
})

router.delete('/:idTask', async (req, res, next) => {
    try {
        const dados = {
            id: req.params.idTask,
            projectId: req.project.id
        };
        const task = new Task(dados);
        await task.deletar();

        res.status(204).end();
    } catch(erro) {
        next(erro);
    }
});

module.exports = router;
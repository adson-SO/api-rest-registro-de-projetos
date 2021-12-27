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
        const dados = Object.assign({}, { project: idProject }, dadosRecebidos);
        const task = new Task(dados);
        await task.criar();
        res.status(201).send(
            JSON.stringify(task)
        );
    } catch(erro) {
        next(erro);
    }
});

router.delete('/:idTask', async (req, res, next) => {
    try {
        const dados = {
            id: req.params.idTask,
            project: req.project.id
        };
        const task = new Task(dados);
        await task.deletar();

        res.status(204).end();
    } catch(erro) {
        next(erro);
    }
})

module.exports = router;
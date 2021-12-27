const modelos = [
    require('../models/Project/ProjectTableModel'),
    require('../models/Project/Task/TaskTableModel')
];

async function createTable() {
    for(let i = 0; i < modelos.length; i++) {
        const modelo = modelos[i];
        await modelo.sync();
    }
}

module.exports = createTable();
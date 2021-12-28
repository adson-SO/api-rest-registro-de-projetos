const Sequelize = require('sequelize');
const connection = require('../../../database/connection');

const columns = {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    taskRelevance: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    projectId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: require('../ProjectTableModel'),
            key: 'id'
        }
    }
}

const options = {
    freezeTableName: true,
    tableName: 'tasks',
    timeStamps: true,
    allowNull: false
}

module.exports = connection.define('tasks', columns, options);
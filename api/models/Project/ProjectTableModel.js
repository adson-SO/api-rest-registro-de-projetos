const Sequelize = require('sequelize');
const connection = require('../../database/connection');
const TaskTableModel = require('./Task/TaskTableModel');

const columns = {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }
}

const options = {
    freezeTableName: true,
    tableName: 'projects',
    timeStamps: true
}

const Connection = connection.define('projects', columns, options);
Connection.hasMany(TaskTableModel);
TaskTableModel.belongsTo(Connection);

module.exports = Connection;
const Sequelize = require('sequelize');
const connection = require('../../database/connection');

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

module.exports = connection.define('projects', columns, options);
const Sequelize = require('sequelize');
const config = require('config');

const connection = new Sequelize({
    database: config.get('mysql.database'),
    user: config.get('mysql.user'),
    password: config.get('mysql.password')
}, 
{
    host: config.get('mysql.host'),
    dialect: 'mysql'
});

module.exports = connection;
const connection = require('./connection');
const Model = require('../models/Project/ProjectTableModel');

module.exports = Model.sync();
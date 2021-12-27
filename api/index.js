const express = require('express');
const config = require('config');
const router = require('./routes/project');
const createTable = require('./database/createTable');

const app = express();

app.use(express.json());

app.use('/api', router);

app.listen(config.get('api.port'), () => console.log('API rodando na porta 3000'));
const express = require('express');
const config = require('config');
const router = require('./routes/project');
const createTable = require('./database/createTable');
const InvalidField = require('./errors/InvalidField');
const DataNotProvided = require('./errors/DataNotProvided');
const NotFound = require('./errors/NotFound');

const app = express();

app.use(express.json());

app.use('/api', router);

app.use((erro, req, res, next) => {
    let status = 500;

    if(erro instanceof NotFound) {
        status = 404;
    }

    if(erro instanceof DataNotProvided || erro instanceof InvalidField) {
        status = 400;
    }

    res.status(status).send(
        JSON.stringify({
            mensagem: erro.message,
            id: erro.idErro
        })
    );
});

app.listen(config.get('api.port'), () => console.log('API rodando na porta 3000'));
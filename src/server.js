const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes')


app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}))
app.use(routes)

app.listen(3333, '192.168.25.7', () => {
    console.log('servidor rodando na porta 3333...')
})
module.exports = app;
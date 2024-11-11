const express = require('express');
const app = express();

const users = [
    { id: 1, name: 'Aline'},
    { id: 2, name: 'João'}
];

const tarefas = [
    { id: 3, name: 'jogar'},
    { id: 4, name: 'relaxar'},
    { id: 5, name: 'dormir'}
];

app.get('/api/users', (req, resp) => {
    resp.status(200).json({ users });
});

app.get('/api/tarefas', (req, res) => {
    res.status(200).json({ tarefas} );
});

app.post('/api/tarefas', (req, res) => {
    const tarefa = req.body.tarefa;
    tarefas.push(tarefa);
    res.status(200).json({ tarefas });
});

module.exports = app;
const request = require('supertest');
const app = require('../app');

describe('Testando To-Do App', () => {
    it ('Deve retornar as tarefas!', async () => {
        const response = await request(app).get('/api/tasks/');
        expect(response.status).toBe(200);
        expect(response.body).toEqual([]);
    });

    it ('Deve criar uma nova tarefa!', async () => {
        const response = await request(app).post('/api/tasks').send({ title: 'Nova tarefa' });

        expect (response.status).toBe(201);
        expect (response.body).toHaveProperty('id');
        expect (response.body).toMatchObject({ title: 'Nova tarefa', completed: false });
    });

    it ('Deve retornar um erro 400 se não houver título!', async () => {
        const response = await request(app).post('/api/tasks').send({});

        expect (response.status).toBe(400);
        expect (response.body).toHaveProperty('error', 'Título é obrigatório');
    });

    it ('Deve atualizar a tarefa existente!', async () => {
        const { body: newTask } = await request(app).post('/api/tasks').send({  title: 'Task atualizada'});

        const response = await request(app).put(`/api/tasks/${newTask.id}`).send({  title: 'Task atualizada', completed: true});

        expect (response.status).toBe(200);
        expect (response.body).toMatchObject({ id: newTask.id, title: 'Task atualizada' });
    });

    it ('Deve deletar uma tarefa existente!', async () => {
        const { body: newTask } = await request(app).post('/api/tasks').send({ title: 'Task deletada' });

        const response = await request(app).post(`/api/tasks/${newTask.id}`).delete({ title: 'Task deletada' });
    });
});
const request = require('supertest');
const app = require('../app');
app.use(express.json());

describe('Testando API', () => {
    // it('Deve retornar todos os usuários com status 200', async () => {
    //     const response = await request(app).get('/api/users');

    //     expect(response.status).toBe(200);
    //     expect(response.body).toHaveProperty('users');
    //     expect(response.body.users).toHaveLength(2);
    //     expect(response.body.users[0]).toEqual({ id: 1, name: 'Aline' });
    // })

    // it('Deve retornar todas as tarefas com status 200', async () => {
    //     const response = await request(app).get('/api/tarefas');

    //     expect(response.status).toBe(200);
    //     expect(response.body).toHaveProperty('tarefas');
    //     expect(response.body.tarefas).toHaveLength(3);
    //     expect(response.body.tarefas).toEqual(expect.arrayContaining([
    //             { id: 3, name: 'jogar' },
    //             { id: 4, name: 'relaxar' },
    //             { id: 5, name: 'dormir' }
    //         ])
    //     );
    // });

    it('Deve adicionar uma tarefa com status 200', async () => {
        const response = await request(app).post('/api/tarefas');

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('tarefas');
        expect(response.body.tarefas).toHaveLength(1);
        expect(response.body.tarefas).send({ tarefas: {title: id: 6, name: 'jogar'} });
    });
})
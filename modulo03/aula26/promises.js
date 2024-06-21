let promessa = new Promise((resolve, reject) => {
    setTimeout(() => {
        let resposta = {};

        if (false) {
            resposta = {
                codigo: 404,
                erro: "Objeto não encontrado"
            };

            reject(resposta);
        }

        resposta = {
            1: { id: 1, nome: 'Caio'},
            2: { id: 1, nome: 'Leonan'},
            3: { id: 1, nome: 'Rogério'}
        }

        resolve(resposta);
    }, 4000);
});

console.log(promessa);
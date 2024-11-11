function propriedadesArray() {
    let dados = {
        nome: 'chagas',
        idade: 20,
        email: 'santosfc@santos.com',
        telefone: '(13) 07070-7070',
        cachorros: ['haru', 'maggie', 'og'], // menção honrosa ao Garu, rip
        linguagens: ['Java', 'Javascript'],
        interesses: ['santos', 'carros', 'bleach']
    };

    let objeto = {};

    for (let chave in dados) {
        if (Array.isArray(dados[chave])) {
            objeto[chave] = dados[chave];
        }
    }

    console.log("Arrays do objeto:")
    console.log(objeto);
}

propriedadesArray();
function propriedadesPessoa() {
    let pessoa = {
        nome: 'chagas',
        idade: 20
    }

    console.log(`Idade: ${pessoa.idade}`);

    pessoa.email = 'santosfc@santos.com';

    console.log(pessoa);
}

propriedadesPessoa();
const soma = require('./soma')

test('soma de 2 + 3 deve retornar 5: ', () => {
    expect(soma(2, 3)).toBe(5)
})

test('soma de -1 + 1 deve retornar 0: ', () => {
    expect(soma(-1, 1)).toBe(0)
})
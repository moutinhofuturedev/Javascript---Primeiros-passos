console.log('Trabalhando com condicionais')

const listaDeViagens = new Array(
    'Estados Unidos',
    'Inglaterra',
    'Autrália',
    'Noruega',
    'Japão',
)

const idadeComprador = 15

console.log('Destinos possíveis:')
console.log(listaDeViagens)

if (idadeComprador >= 21) {
    console.log('Comprador maior de idade')
    listaDeViagens.splice(4, 1)
} else {
    console.log('Menor de idade: não posso vender')
}

console.log(listaDeViagens)





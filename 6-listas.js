console.log(`Trabalhando com variáveis`)

// const saoPaulo = `São Paulo`
// const rioDeJaneiro = `Rio de Janeiro`
// const salvador = `Salvador`


//Para facilitar e agiliar o processo, existe uma estrutura de dados chamada array, 
//em que podemos armazenar diversos dados. A maneira de declarar um array é um pouco diferente de textos e números:
// utilizamos uma palavra chave new e o tipo da estrutura Array, e assim podemos criar uma nova lista com nossos destinos:
const listaDeDestinos = new Array(
    `São Paulo`,
    `Rio de Janeiro`,
    `Salvador`,
    `Curitiba`,
    `Porto Alegre`
)

listaDeDestinos.push(`Cutia`) //adicionando itens na lista com a função (.push) na variável "listaDeDestinosj"

console.log('Destinos Possíveis:')
console.log(listaDeDestinos)

//Sala de cinema
const listaDeFilmes = new Array(
    'Poderoso Chefão',
    'Herry Potter',
    'Lagoa Azul',
    'O Erxocista',
    'Velozos e furiosos'
)

console.log(`Lista de filmes hoje á noite`)
console.log(listaDeFilmes)
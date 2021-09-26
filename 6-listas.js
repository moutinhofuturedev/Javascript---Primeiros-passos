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
console.log( listaDeFilmes )

listaDeFilmes.splice(4) //usando o objeto splice para remover o item (4) da lista. (Velozos e Furiosos) - rgemovido
console.log( listaDeFilmes )


//Escolas de programação
const escolasTechs = new Array(
    `Alura`,
    `DIO`,
    `Gama Academy`,
    `Cubos Academy`,
    `IGTI`,
    `Let´s Code`
)

console.log(`As principais techs de programação:`)
console.log( escolasTechs )

console.log(escolasTechs[1]) //colocando [1] eu imprimo apenas o segundo item da lista (DIO)
console.log(escolasTechs[1] + ' e ' + escolasTechs[5]) //impressão - DIO e Let´s Code


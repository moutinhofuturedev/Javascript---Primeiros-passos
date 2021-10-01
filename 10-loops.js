console.log('\n Identando Condicionais ')

const listaDeFilmes = new Array(
    `O Exorcista`,
    `Procurando Nemo`,
    `O Rei Leão`,
    `Prenda-me se for capaz`
)

const idadeDoUsuario = 21
const estaAcompanhada = false
let filmeComprado = false //variável let: muda de acordo com a estrutura do código
const filme = 'O Exorcista'

console.log('Filmes para assistir:')
console.log(listaDeFilmes)

const podeComprar = idadeDoUsuario >= 18 || estaAcompanhada == true

let contador = 0
let filmeExiste = false

while (contador < 4) {
    if (listaDeFilmes[contador] == filme) {
        console.log('Filme na lista.')
        filmeExiste = true
        break //quando o item na lista é encontrado,o (break) para a leitura das linhas de código
    }
    contador += 1
}

console.log('Filme existe', filmeExiste)
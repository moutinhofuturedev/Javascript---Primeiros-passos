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
const filme = 'Prenda-me se for capaz' 

console.log('Filmes para assistir:')
console.log(listaDeFilmes)

const podeComprar = idadeDoUsuario >= 18 || estaAcompanhada == true

let contador = 3 
while(contador < 4 ){
    if (listaDeFilmes[contador] == filme){
        console.log('Filme na lista.')
    }else{
        console.log('Este filme não está na lista.')
    } 
    contador += 1
}



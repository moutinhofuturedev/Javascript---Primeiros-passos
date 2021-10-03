console.log('Ifs encadeados')


const listaDeFilmes = new Array(
    `O Exorcista`,
    `Procurando Nemo`,
    `O Rei Leão`,
    `Prenda-me se for capaz`
)

const idadeDoUsuario = 12

const estaAcompanhada = true

console.log('Filmes para assistir:')
console.log(listaDeFilmes)

if (idadeDoUsuario >= 18) {
    console.log('Curta o filme!!!')
    listaDeFilmes.splice(3, 1) //linha 20: código dupilcado com linha 26 (evitar código duplicado)
    console.log(listaDeFilmes)
} else {//executar outra verificação
    //bloco do menor de idade
    if (estaAcompanhada == true) {
        console.log('Menor de idade acompanhado.Curta o filme!!!')
        listaDeFilmes.splice(3, 1) //linha 26: código dupilcado com linha 20 (evitar código duplicado)
        console.log(listaDeFilmes)
    } else {
        console.log('Menor de idade não acompanhado.Filme proibido para menores de 16 anos.')
    }

}


//exemplo de identação: (else if)

/* if (idadeDoUsuario >= 18) {
    console.log('Curta o filme!!!')
    listaDeFilmes.splice(1)
    console.log(listaDeFilmes)
} else if (estaAcompanhada == true) {
    console.log('Menor de idade acompanhado.Curta o filme!!!')
    listaDeFilmes.splice(1)
    console.log(listaDeFilmes)
} else {
    console.log('Menor de idade não acompanhado.Filme proibido para menores de 16 anos.')
} */

 //Aprendizado continua no proximo arquivo 9-identando condicionais (evitar códigos duplicados)
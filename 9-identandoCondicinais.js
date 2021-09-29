console.log('Identando Condicionais ')

const listaDeFilmes = new Array(
    `O Exorcista`,
    `Procurando Nemo`,
    `O Rei Leão`,
    `Prenda-me se for capaz`
)

const idadeDoUsuario = 18
const estaAcompanhada = true
const filmeComprado = true

console.log('Filmes para assistir:')
console.log(listaDeFilmes)

if (
    idadeDoUsuario >= 18 || // essa tarefa ( || ) significa 'ou' pra juntar duas variáveis
    estaAcompanhada == true) {
    console.log('Seu filme foi reservado')
    listaDeFilmes.splice(3, 1)
    console.log(listaDeFilmes)
} else {
    console.log('Menor de idade não acompanhado.Filme proibido para menores de 16 anos.')
}

console.log('Estatus da sua compra: \n\n') // \n\n significa pular uma linha no terminal
if (idadeDoUsuario >= 18 && filmeComprado ){ // && significa 'e'
console.log('Ótima compra!')
}else{
    console.log('Filme não pago.Conclua a compra')
}

/* O que aprendemos nessa aula:
If e Else
Operadores lógicos
if encadeado
else if
&& e || */
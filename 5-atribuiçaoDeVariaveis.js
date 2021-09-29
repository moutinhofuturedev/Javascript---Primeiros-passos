console.log('Trabalhando com atribuições de variáveis')

const nome = 'Paulo' //de const para let
const sobrenome = 'Moutinho' //de const para let
const idade = 31 

console.log( nome + sobrenome ) 

//separando texto com virgula (valor, valor) ou com arrays (valor + 'espaço' + valor )
console.log(nome, sobrenome)
console.log(nome + ' ' + sobrenome)


console.log( `Meu nome é ${nome}` ) //Meu nome é Paulo
console.log(`Meu nome é ${nome + ' ' +sobrenome}`) //Meu nome é Paulo Moutinho
console.log(`Meu nome é ${nome} ${sobrenome}`) //Meu nome é Paulo Moutinho
console.log(`Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos.`)


//outro tipo de variável (let)
let contador = 4
contador = contador + 5

console.log(contador) //resultado imprimido ( 9 )


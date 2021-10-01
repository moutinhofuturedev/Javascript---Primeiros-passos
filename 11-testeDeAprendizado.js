console.log('Teste de aprendizado com while (enquanto) e contador')

const pasteis = new Array(
    'Carne',
    'Carne com queijo',
    'Bauru',
    'Pizza'
)

const listaDePasteis = 'Carne com queijo'

let contador = 0
while(contador < 4){
    if(pasteis[contador] == listaDePasteis){
        console.log('Pastel na lista.')
    }else{
console.log('Pastel não está na lista.')
    }
    contador += 1
}
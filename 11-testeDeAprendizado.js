console.log('Teste de aprendizado com while (enquanto) e contador')

const pasteis = new Array(
    'Carne',
    'Carne com queijo',
    'Bauru',
    'Pizza'
)

const listaDePasteis = 'Carne com queijo' 

let contador = 2
let existePastel = false

while (contador < 4) {
    if (pasteis[contador] == listaDePasteis) {
        console.log('Pastel na lista.')
        existePastel = true
        break
    } else { // está condição  não está fumcionando: verificar pra arrumar
        console.log('Pastel não está na lista.')
        break
        existePastel = false
    }
    contador += 1
}

console.log('Existe pastel:',existePastel)


const nomes = ["Diego", "Olivia", "Isis"]
nomes.forEach(element => console.log(element));

const numeros = [2,4,6,7]
const numerosMultiplicados = numeros.map(n => n*2)
console.log(numerosMultiplicados)

const taboadaTres = numeros.map(n => n*3)
console.log(taboadaTres)

const maiorNumero = numeros.reduce((anterior, atual) => {
  return anterior > atual ? anterior : atual
})

console.log(maiorNumero);

// PARA VERIFICAR SE EXISTE UM DETERMINADO NUMERO NO ARRAY
const numeroEscolhido = numeros.some(n => n === 2)
console.log(numeroEscolhido);

// PARA VERIFICAR SE ALGUM NUMERO NÃO EH PAR (DIVISIVEL POR 2)
const verificarArray = numeros.every(n => n%2 == 0)
console.log(verificarArray);
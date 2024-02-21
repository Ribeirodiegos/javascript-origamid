// Retorne um número aleatório
// entre 1050 e 2000
const max = 2000
const min = 1050

let aleatorio = Math.floor(Math.random() * (max - min + 1) + min)

console.log(aleatorio)

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9, 10, 35';

const arrayNumeros  = numeros.split(', ')
const maior = Math.max(...arrayNumeros)
console.log(maior);



// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];


function limparPreco(preco) {
  preco = +preco.toUpperCase().replace('R$ ', '').replace(',', '.').trim()
  preco = +preco.toFixed(2)
  return preco
}

let soma = 0

listaPrecos.forEach(preco => {
  soma += limparPreco(preco)
});



console.log(soma);
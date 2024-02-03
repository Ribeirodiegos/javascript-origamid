// Crie uma função para verificar se um valor é Truthy
function verificar (valor) {
  if (valor) {
    return console.log("Essa variavel é Truthy")
  } else {
    return console.log("Essa variavel é Falsy")
  }
}

verificar("")
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function quadrado (lado) {
  return lado*4
}

console.log(quadrado(5))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto (nome, sobrenome) {
  var nome1 = nome + " " + sobrenome;
  return nome1
}

console.log(nomeCompleto("Diego", "Ribeiro"))

// Crie uma função que verifica se um número é par

function parOuImpar (num) {
  if (num%2) {
    return "Impar"
  } else {
    return "Par"
  }
}

console.log(parOuImpar(3))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDeDado (dado) {
  return typeof(dado)
}

console.log(tipoDeDado(false))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function() {
  console.log("Diego Ribeiro dos Santos")
})

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(3));
console.log(jaVisitei(20));

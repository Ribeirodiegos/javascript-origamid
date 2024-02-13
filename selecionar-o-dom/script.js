// Retorne no console todas as imagens do site
var imagensSite = document.querySelectorAll('img')
console.log(imagensSite)

// Retorne no console apenas as imagens que começaram com a palavra imagem
var imagensSelecionadas = document.querySelectorAll('img[src^="./img/imagem"]')
console.log(imagensSelecionadas)

// Selecione todos os links internos (onde o href começa com #)
var linksInternos = document.querySelectorAll('[href^="#"]')
console.log(linksInternos)

// Selecione o primeiro h2 dentro de .animais-descricao
var primeiroH2 = document.querySelector('.animais-descricao h2')
console.log(primeiroH2)

// Selecione o último p do site
var ultimoParagrafo = document.querySelector('p:last-child')
console.log(ultimoParagrafo)
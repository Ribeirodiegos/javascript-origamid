// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImagem = document.querySelector('img')
console.log(primeiraImagem.offsetTop)

// Retorne a soma da largura de todas as imagens
const imgs = document.querySelectorAll('img')
var larguraTotal = 0
imgs.forEach(element => {
    larguraTotal += element.width
    
});

console.log(`largura total das imagens: ${larguraTotal}px.`)

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a')
links.forEach((link, index) => {
    const larguraLink = link.offsetWidth
    const alturaLink = link.offsetHeight

    if (larguraLink >= 48 && alturaLink >= 48) {
        console.log(`${index}o link corresponde o tamanho necessario. Tamanho: ${larguraLink} por ${alturaLink}`)
    } else {
        console.log(`${index}o link não corresponde o tamanho necessario. Tamanho: ${larguraLink} por ${alturaLink}`)
        
    }

});
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserWidth = window.innerWidth
const menu = document.querySelector('.menu')

if (browserWidth < 720) {
    menu.classList.add('menu-mobile')    
}
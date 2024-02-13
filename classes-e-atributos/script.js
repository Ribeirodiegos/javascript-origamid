// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a')
itensMenu.forEach(element => {
  element.classList.add('ativo')
  console.log(element.classList)
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach(element => {
  element.classList.remove('ativo')
  console.log(element.classList)
});
// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img')
imgs.forEach((element, index) => {
  if(element.getAttribute('alt')) {
    console.log(`A ${index+1}a. imagem tem texto alternativo.`)
  } else {
    console.log(`A ${index+1}a. imagem não tem texto alternativo.`)

  }
});

// Modifique o href do link externo no menu

const linkExterno = document.querySelector('a[href^="http"]')
console.log(linkExterno)

linkExterno.setAttribute('href', 'google.com')

console.log(linkExterno)
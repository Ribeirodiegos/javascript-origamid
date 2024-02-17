// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const links = document.querySelectorAll('a[href^="#"]')

function handlelink(event) {
    event.preventDefault()
    links.forEach(link => {
        link.classList.remove('ativo')
    });

    this.classList.add('ativo')
}


links.forEach(link => {
    link.addEventListener('click', handlelink)
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll('body *')

function handleElement(event) {
    console.log(event.currentTarget)
}

// todosElementos.forEach(element => {
//     element.addEventListener('click', handleElement)
// });

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function handleElement(event) {
    this.remove()
}

todosElementos.forEach(element => {
    element.addEventListener('click', handleElement)
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function handleKeyT(event) {
    if (event.key === 't') {
        document.documentElement.classList.toggle('textomaior')
    }
}

window.addEventListener('keydown', handleKeyT)
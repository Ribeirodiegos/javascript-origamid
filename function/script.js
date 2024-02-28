// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const paragrafos = document.querySelectorAll('p')

const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, paragrafo) => {
    return acumulador + paragrafo.innerText.length
}, 0)

console.log(totalCaracteres);
console.log(paragrafos)


// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento(tag, classe, conteudo) {
    const elemento = document.createElement(tag)
    classe ? elemento.classList.add(classe) : null
    conteudo ? elemento.innerText = conteudo : null
    return elemento
}

console.log(criarElemento('h1', 'titulo', 'Testando uma função'));
// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criarElemento.bind(null, 'h1', 'titulo')

const cursoJS = h1Titulo('Curso de javascript')
const cursoHTML = h1Titulo('Curso de HTML')

console.log(cursoJS, cursoHTML);
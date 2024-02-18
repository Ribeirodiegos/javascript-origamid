// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome,sobrenome,idade) {
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.idade = idade
}

Pessoas.prototype.nomeCompleto = () => {
    return `${this.nome} ${this.sobrenome}`
}

const pessoa1 = new Pessoas('Diego','Ribeiro dos Santos', 31)


// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

// NodeList = entries, foreach,item,keys
// HTMLCollection = item, lenght, namedItem
// Document = querySelector, url, links

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

// li; HTMLLIElement
// li.click; Function
// li.innerText; String
// li.value; Number
// li.hidden; Boolean
// li.offsetLeft; Number
// li.click(); undefined

// Qual o construtor do dado abaixo:
// li.hidden.constructor.name; String

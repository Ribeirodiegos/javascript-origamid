var animais = document.getElementsByClassName('grid-section')
console.log(animais[2].innerHTML)

var primeiroItem = document.querySelector('li');
console.log(primeiroItem);

var imagensAnimais = document.querySelectorAll('.animais img');
console.log(imagensAnimais[2])

imagensAnimais.forEach(function(item, index){
    console.log(`${index} = ${item}`)
})
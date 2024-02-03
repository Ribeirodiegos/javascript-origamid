// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var anos = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
console.log('O Brasil ganhou a copa nos anos de:')
for (let index = 0; index < anos.length; index++) {
    console.log(anos[index])
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
var fruta = ""
var count = 0
while (fruta != "Uva") {
    fruta = frutas[count]
    count++
}
console.log(count)
console.log(fruta)

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var frutaSelecionada = frutas[frutas.length-1];
console.log(frutaSelecionada)
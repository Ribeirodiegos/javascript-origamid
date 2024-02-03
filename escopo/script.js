// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
  }
  console.log(var, marca, portas);
//   nao existe uma variavel var para printar no console. A funcao console esta sendo usando em outro escopo
  
  // Como corrigir o erro abaixo?
  function somarDois(x) {
    const dois = 2;
    return x + dois;
  }
  function dividirDois(x) {
    return x + dois;
  }
  somarDois(4);
  dividirDois(6);

//   colocar a variavel "dois" fora da função, no escopo global
  
  // O que fazer para total retornar 500?
  var numero = 50;
  
  for(var numero = 0; numero < 10; numero++) {
    console.log(numero);
  }
  
  const total = 10 * numero;
  console.log(total);
  
//   mudar o tipo do contador do looping para let, pois ele esta sobrescrevendo a variavel, assim a variavel let só funciona dentro do escopo do loop
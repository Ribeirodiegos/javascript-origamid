// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes1 = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];
  let soma = 0
  transacoes1.forEach(element => {
    let numeroLimpo = +element.valor.replace('R$ ', '')
    if(element.descricao.includes('Taxa')) {
       soma += numeroLimpo  
    }
    
  });
  console.log(soma)

  
  // Retorne uma array com a lista abaixo
  const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

  let listaTransportes = transportes.split(';')
  listaTransportes.forEach(element => {
    console.log(element)
  });
  
  // Substitua todos os span's por a's
  const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;
  
    let htmlCorrigido = html.replace(/[span]+/g, 'a')
    console.log(htmlCorrigido)


  // Retorne o último caracter da frase
  const frase = 'Melhor do ano!';
  console.log(frase.charAt(frase.length-1))
  
  // Retorne o total de taxas
  const transacoes = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
  
  let count = 0
  
  transacoes.forEach(element => {
    if(element.trim().toLowerCase().includes('taxa')) {
        console.log(element.trim().toLowerCase())
        count++
    }
  });

  console.log(`Existem ${count} taxas na lista.`)

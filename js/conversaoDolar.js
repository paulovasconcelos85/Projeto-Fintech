console.log(`Função de conversão em Dólar`);
// criando a função
function conversaoDolar(valorReal, cotacao) {
    return (valorReal / cotacao);
}

// sorteando um valor para Reais
const valorReal = Math.floor(Math.random()*1000);
const cotacaoDolar = 5.23;


// criando a variável e chamando a função
const cotacaoDia = conversaoDolar(valorReal,cotacaoDolar);

//exibindo as informações no console
console.log(`Valor em Real = ${valorReal.toFixed(2)}`);
console.log(`Cotação Dólar = ${cotacaoDolar}`);
console.log(`Valor final em Dólar =
${cotacaoDia.toFixed(2)}`);
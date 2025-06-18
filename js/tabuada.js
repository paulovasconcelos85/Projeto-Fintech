//criando a função com um parâmetro
function calcularTabuada(numero = 0) {
    console.log(`Fazendo a tabuada do ${numero}:`);
    for (let i = 0; i <= 10; i++) {
        console.log(`${numero} * ${i} = ${numero * i}`);
    }
    console.log(`-----Fim da Tabuada----`);
}
//fim da função

//chamando a função e passando um argumento
calcularTabuada(9);
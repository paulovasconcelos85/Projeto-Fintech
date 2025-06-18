//criando a função
function somarNumeros() {
    let numeros;
    let total = 0;
    for (let i = 0; i <= 4; i++) {
        numeros = Math.floor(Math.random() * 101);
        console.log(`Número sorteado: ${numeros}`);
        total+=numeros;
    }
    console.log(`Total da somatória: ${total}`);
    console.log(`----------------------------`);
}
//fim da função

//chamando a função
somarNumeros();
somarNumeros();
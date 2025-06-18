function mensagem1() {
    console.log(`Exibindo a mensagem 1`)
}
function mensagem2() {
    console.log(`Exibindo a mensagem 2`)
}
function mensagem3() {
    console.log(`Exibindo a mensagem 3`)
}
// console.log('');
console.log('-----Fluxo normal-----');
mensagem1();
mensagem2();
mensagem3();
console.log('');
console.log('-----Usando o callback-----');
mensagem1();
//definindo o método setTimeout para função mensagem2()
setTimeout(mensagem2, 1000)
mensagem3();

console.log('-----Usando outro exemplo---------');

const somar = (x, y, z) => {
    return (x + y + z);
};
const media = (x, y, z) => {
    return (x + y + z) / 3;
} 
const calcular = (x, y, z, cb) => {
    return cb(x, y, z);
} 
console.log('Chamando o callback para realizar os cálculos');
console.log('Valores: 10, 20, 30');
console.log(`Calculando a soma: ${calcular(10, 20, 30, somar)}`);
console.log(`Calculando a média: ${calcular(10, 20, 30, media)}`);

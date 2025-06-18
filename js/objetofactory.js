function criarHeroi(nome, velocidade, agilidade, forca) {
    return {
        nome,
        velocidade,
        agilidade,
        forca
    };
}
//criando os objetos
const heroi1 = criarHeroi("Eu", 88, 87, 91);
const heroi2 = criarHeroi("Tu", 86, 82, 92);
const heroi3 = criarHeroi("Ele", 92, 98, 94);
//exibindo os objetos
console.log(heroi1);
console.log(heroi2);
console.log(heroi3);
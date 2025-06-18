console.log('Função de cálculo de média');
//criando a função
const media = function(n1, n2, n3, n4){
    const media = (n1 + n2 + n3 + n4)/4;
    return media.toFixed(1);
}
//chamando a função
console.log(`Média do aluno 1 = ${media(8,9,7,9)}`);
console.log(`Média do aluno 2 = ${media(10,8,9,10)}`);
console.log(`Média do aluno 3 = ${media(8,8,8,10)}`);
//usando o método construtor
const xMen = new Array('Ciclope', 'Wolverine', 'Fênix', 'Fera', 'Vampira');
//usando a declaração literal
const vingadores = ['Homem de Ferro', 'Capitão América', 'Thor', 'Valquíria', 'Capitã Marvel'];
//exibindo os array
console.log(xMen);
console.log(vingadores);
console.log('-----------');

const vingadoresI = ['Homem de Ferro', 'Capitão América', 'Thor', 'Valquíria', 'Capitã Marvel'];
//exibindo o array
console.log(vingadoresI);
//exibindo conteúdo de índices no array
console.log(vingadoresI[1]);
console.log(vingadoresI[2]);
//alterando o valor de um índice
vingadoresI[1] = 'Homem Aranha';
console.log(vingadoresI);
console.log(vingadoresI[1]);
const vingadores = ['Homem de Ferro', 'Capitão América', 'Thor', 'Valquíria', 'Capitã Marvel'];
const xMen = ['Ciclope', 'Wolverine', 'Fênix', 'Fera', 'Vampira'];
console.log('Arrays originais');
console.log(vingadores);
console.log(xMen);
//gerando novo array
const todosHerois = vingadores.concat(xMen);
//exibindo o novo array
console.log('Novo array de heróis');
console.log(todosHerois);
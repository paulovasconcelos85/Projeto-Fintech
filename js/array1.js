const vingadores = ['Homem de Ferro', 'Capitão América', 
'Thor', 'Valquíria', 'Capitã Marvel'];
console.log('Array original');
//exibindo o array
console.log(vingadores);
//inserindo no primeiro índice
vingadores.unshift('Gavião Arqueiro');
//inserindo no último índice
vingadores.push('Viúva Negra');
//exibindo o array com os novos heróis
console.log('Novos hérois inseridos');
console.log(vingadores);
//excluindo o primeiro índice
vingadores.shift();
//excluindo o último índice
vingadores.pop();
//exibindo o array sem os novos heróis
console.log('Novos hérois excluídos');
console.log(vingadores);
const vingadores = ['Homem de Ferro', 'Capitão América', 'Thor', 'Valquíria', 'Capitã Marvel'];
for (const vingador in vingadores){
    console.log((`Índice ${vingador} do array Vingadores: ${vingadores[vingador]}`));
}

for (const vingador of vingadores){
    console.log(`Herói: ${vingador}`);
}

vingadores.forEach( vingador =>{
    const agilidade = Math.ceil(Math.random()*100);
    console.log(`Nome do herói: ${vingador} - Agilidade: 
    ${agilidade}`);
})
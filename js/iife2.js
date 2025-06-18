(() => {
const calcularValores = (valor1, valor2) => {
  console.log(`Resultado da Soma: ${valor1 + valor2}`);
  console.log(`Resultado da Multiplicação: ${valor1 * 
  valor2}`);
  console.log(`Sem escopo global – não são acessadas`);
}
calcularValores(30, 30);
})();
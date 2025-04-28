//Mesmas regras de escopo do let
// tenho que sempre iniciar as constantes
// não posso reatribuir o valor da constante, se quiser mudar é só mudar o const pra let

const nome = 'João';
console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplo = resultado * 3;
console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplo);
resultadoTriplo = resultadoTriplo + 5; 
console.log(resultadoTriplo);

console.log(typeof primeiroNumero);
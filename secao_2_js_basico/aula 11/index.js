/**
 * + adição e concatenação
 * - / * 
 * ** potenciação
 * % resto da divisão
 * 
 * ordem = () * / % + -
 */

const num1 = 2;
const num2 = 10;
console.log(num1 ** num2);

let contador = 1;
contador++;
contador++;
contador++;
contador++;
contador--;
console.log(contador)


let passo = 2;
passo += 1;
passo += 1;
passo += 1;
passo += 1;
console.log(passo);

let passo2 = 2;
passo2 **= 2;
passo2 **= 2;
passo2 **= 2;
console.log(passo2);

//Nan - Not a number
const num = 10;
const numero = '5';
console.log(num * numero) // nesse caso o js multiplica pq identifica o erro

//parseInt (inteiro), parseFloat(decimais), se colocar um nome vai dar NaN
const teste = 10;
const testeNum = parseInt('5');
console.log(teste * testeNum);
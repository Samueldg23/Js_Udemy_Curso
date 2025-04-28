let varA = 'A' // B
let varB = 'B' // C
let varC = 'C' // A

console.log(varA, varB, varC);

const a = varB;
const b = varC;
const c = varA;

varA = a;
varB = b;
varC = c;

console.log(varA, varB, varC);

/**
 * lógica da aula
 * 
 * const varATemp = varA
 * varA = varB
 * varB = varC
 * varC = varATemp
 * 
 * 
 * [varA, varB, varC] = [varB, varC, varA] 
 */
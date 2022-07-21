// EXERCICIO 01

const minhaIdade = Number(prompt('Qual é a sua idade?'));
console.log('Minha idade:', minhaIdade);
const idadeMelhorAmiga = Number(prompt('Qual é a idade da sua melhor amiga?'));
console.log('Idade da minha melhor amiga:', idadeMelhorAmiga);
const idadeMaior = minhaIdade > idadeMelhorAmiga;
console.log('A sua idade é maior que a idade da sua melhor amiga? -', idadeMaior);
const difereIdade = minhaIdade - idadeMelhorAmiga;
console.log('Diferença de idade:', difereIdade);
console.log('');


// EXERCICIO 02
const a = 'vou pra praia'
const b = 'sou maior de idade'
const c = 'posso tomar uma cervejinha'
const d = 'quero passear de carro'

/*
!b && d
b && a && !d
a || d
c && !d
*/
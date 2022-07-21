//CODIGO AQUI

let saldo = 15;

console.log('PRÁTICA GUIADA');
console.log('Saldo inicial:', saldo);
saldo = saldo + 22.40; // ou saldo += 22.40
console.log('Recebo mais 22.40 e fico com:', saldo);
console.log('Dividi igualmente com meus 2 irmãos');
saldo = saldo / 3;
console.log('Cada um ficou com:', saldo.toFixed(2));
saldo = saldo * 3.42;
console.log('Apliquei meu dinheiro (x 3.42) e fiquei com:', saldo.toFixed(2));
console.log('Reparti em 3 contas diferentes');
saldo = saldo % 3;
console.log('Sobrou', saldo.toFixed(2), 'para comprar chiclete.');

// dividi em 3 contas e o resto usei para comprar chiclete

console.log('');
console.log('PRECEDÊNCIA MATEMÁTICA');

let multiplicaESoma1 = 2 * 2 + 2;
console.log('Resultado 1:', multiplicaESoma1);
let multiplicaESoma2 = 2 * (2 + 2);
console.log('Resultado 2:', multiplicaESoma2);

console.log('');
console.log('IGUAL E DIFERENTE');

const resposta1 = 5 === 5;
console.log('Resposta1:', resposta1);
const resposta2 = 5 !== 5;
console.log('Resposta2:', resposta2);
const resposta3 = 5 !== '5';
console.log('Resposta3:', resposta3);
const resposta4 = '5' === 'cinco';
console.log('Resposta4:', resposta4);
const resposta5 = (typeof 5 === typeof 20);
console.log('Resposta5:', resposta5);
const resposta6 = (typeof '5' === typeof 'cinco');
console.log('Resposta6:', resposta6);

console.log('');
console.log('MENOR E MAIOR');

const numero1 = 100;
const numero2 = 60;

console.log('O primeiro numero é igual ao segundo?', numero1 === numero2);
console.log('O primeiro número é menor ou igual ao segundo?', numero1 <= numero2);
console.log('O primeiro número é maior que o segundo?', numero1 > numero2);
console.log('O primeiro número é menor que o segundo?', numero1 < numero2);

console.log('');
console.log('OPERADORES LÓGICOS');

const a = 'Quero dirigir um Celta 2012';
const b = 'Sou maior de idade';
const c = 'Consigo comprar o Celta por 22.000 reais';
const d = 'Consigo alugar o Celta';
const e = 'Tenho carteira de motorista';

console.log('');
console.log('EXERCÍCIO DE FIXAÇÃO 1');
console.log('');

let minhaIdade = Number(prompt('Qual é a sua idade?'));
console.log('Minha idade:', minhaIdade);
let idadeMelhorAmiga = Number(prompt('Qual é a idade da sua melhor amiga?'));
console.log('Idade da minha melhor amiga:', idadeMelhorAmiga);
let idadeMaior = minhaIdade > idadeMelhorAmiga;
console.log('A sua idade é maior que a idade da sua melhor amiga? -', idadeMaior);
let difereIdade = minhaIdade - idadeMelhorAmiga;
console.log('Diferença de idade:', difereIdade);
console.log('');

console.log('');
console.log('EXERCÍCIO DE FIXAÇÃO 2');

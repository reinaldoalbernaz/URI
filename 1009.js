let lines = ['JOAO', 500.00, 1230.30];

const nome = parseFloat(lines.shift());
const salarioFixo = parseFloat(lines.shift());
const totalVendas = parseFloat(lines.shift());

const salario = ((totalVendas * 15) / 100) + salarioFixo;

console.log('TOTAL = R$', salario.toFixed(2));
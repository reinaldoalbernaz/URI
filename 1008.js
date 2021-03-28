let lines = [25, 100, 5.50];

const numero = parseFloat(lines.shift());
const horas = parseFloat(lines.shift());
const valorHora = parseFloat(lines.shift());

const salario = valorHora * horas;

console.log('NUMBER =', numero);
console.log('SALARY = U$', salario.toFixed(2));
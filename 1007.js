let lines = [5, 6, 7, 8];

const A = parseFloat(lines.shift());
const B = parseFloat(lines.shift());
const C = parseFloat(lines.shift());
const D = parseFloat(lines.shift());

let diferenca = (A * B - C * D);

console.log('DIFERENCA =', diferenca);
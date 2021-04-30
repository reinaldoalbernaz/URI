var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const p1 = lines.shift().split(" ");
const p2 = lines.shift().split(" ");

const calc1 = Number(p1[1]) * Number(p1[2]);
const calc2 = Number(p2[1]) * Number(p2[2]);
const total = calc1 + calc2;

console.log('VALOR A PAGAR: R$', total.toFixed(2));
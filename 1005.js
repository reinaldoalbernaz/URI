// https://www.urionlinejudge.com.br/judge/pt/problems/view/1005

let lines = [5.0, 7.1];

const a = 3.5 * parseFloat(lines.shift()).toFixed(1);
const b = 7.5 * parseFloat(lines.shift()).toFixed(1);
const MEDIA = (a + b) / 11;
console.log('MEDIA =', MEDIA.toFixed(5));

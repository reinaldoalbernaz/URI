let lines = [5.0, 6.0, 7.0];

const a = parseFloat(lines.shift());
const b = parseFloat(lines.shift());
const c = parseFloat(lines.shift());

let media = ((a / 10) * 2) + ((b / 10) * 3) + ((c / 10) * 5);

console.log('MEDIA =', media.toFixed(1));
const power = (x, n) => {
  let y = Math.pow(x, n);
  console.log(x + ' в степени ' + n + ' = ' + y);
}

x = +prompt('Введити число x');
n = +prompt('Введити степень');

power(x, n);
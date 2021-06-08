function primeNumber(a) {
  let primebool;
  if (typeof a == 'number' && !isNaN(a)) {
    if (a <= 1000) {
      for (let i = 2; i < 10; i++) {
        if (a % i !=0 && a != i) {
          primebool = true;
        } else if (a != i) {
          primebool = false;
          return 'Это не простое число';
        }
      }
      if (primebool == true) {
        return 'Это простое число';
      }
    } else {
      return 'Число больше 1000';
    }
  } else{
    return 'Это не число';
  }
}

number=+prompt('Введите число:');

console.log(primeNumber(number));
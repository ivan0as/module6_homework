function funcEvenOdd() {
  let arr = [2,2,2,0,2,5];
  let even = 0;
  let odd = 0;
  let zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof +arr[i] == 'number' && !isNaN(arr[i])) {
      if (+arr[i] % 2 == 0 && +arr[i] != 0) {
        even++;
      } else if (+arr[i] % 2 != 0 && +arr[i] != 0) {
        odd++;
      } else {
        zero++;
      }
    }
  }

  console.log('Четных символов = ' + even + '\nНечетных символов = ' + odd + '\nНулей = ' + zero);
}

funcEvenOdd();
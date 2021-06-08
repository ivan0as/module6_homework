const countingNumbers = function(a, b) {
  const intervalId = setInterval(function () {
    if (a <= b) {
      console.log(a);
      a++;
    } else{
      clearInterval(intervalId);
    }
  }, 1000);
}

firstNumber = +prompt('Введите первое число:');
secondNumber = +prompt('Введите второе число:');

countingNumbers(firstNumber, secondNumber);
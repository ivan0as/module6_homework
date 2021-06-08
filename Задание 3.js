function sum(firstNumber) {
    return function (secondNumber) {
        return firstNumber+secondNumber;
    };
}

firstNumber = +prompt ('Введите первое число');
secondNumber = +prompt ('Введите второе число');

console.log(sum(firstNumber)(secondNumber));
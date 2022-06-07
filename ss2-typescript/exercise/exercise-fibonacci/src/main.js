function sum(number) {
    var number1 = 0;
    var number2 = 1;
    var temp;
    var result = number1 + number2;
    if (number <= 0) {
        result = 0;
    }
    else if ((number == 1 || number == 2)) {
        result = 1;
    }
    var count = 2;
    while (count < number) {
        temp = number1 + number2;
        number1 = number2;
        number2 = temp;
        result += temp;
        count++;
    }
    return result;
}
console.log(sum(8));

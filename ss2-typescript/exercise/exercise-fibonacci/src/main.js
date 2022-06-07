var arrFibo = fibonacciArray(10);
console.log(arrFibo);
var result = 0;
arrFibo.forEach(function (element) { return result += element; });
console.log("sum of fibonacci array: " + result);
function fibonacciArray(number) {
    var number1 = 0;
    var number2 = 1;
    var temp;
    var arr = [];
    var count = 0;
    while (count < number) {
        if (count == 0) {
            arr.push(number1);
        }
        else if (count == 1) {
            arr.push(number2);
        }
        else {
            temp = number1 + number2;
            number1 = number2;
            number2 = temp;
            arr.push(temp);
        }
        count++;
    }
    return arr;
}

let arrFibo = fibonacciArray(10);
console.log(arrFibo);
let result: number = 0;
arrFibo.forEach(element => result+=element);
console.log("sum of fibonacci array: "+result);


function fibonacciArray(number: number) :Array<number> {
    let number1: number = 0;
    let number2: number = 1;
    let temp: number;
    let arr: Array<number> = [];
    let count: number = 0;
    while (count < number) {
        if (count == 0) {
            arr.push(number1);
        } else if (count ==1){
            arr.push(number2);
        }
        else {
            temp = number1 + number2;
            number1 = number2;
            number2 = temp;
            arr.push(temp)
        }
        count++;
    }
    return arr;
}




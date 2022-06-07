function sum(number:number): number {
    let number1:number = 0;
    let number2:number = 1;
    let temp:number;
    let result:number = number1+number2;
    if(number<=0){
        result = 0;
    } else if ((number == 1 || number == 2)){
        result = 1;
    }

    let count:number = 2;
    while (count<number){
       temp=number1+number2;
       number1=number2;
       number2=temp;
       result+=temp;
       count++;
    }
    return result;
}
console.log(sum(8));

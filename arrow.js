// function doubleIt(number){
//     return number * 5
// }

// const doubleIt = function myFun(Number){
//     return Number * 5
// }

const doubleIt = Number => Number * 5;
const add = (x , y) =>  x + y;
const give5 = () => 5;
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x-y;
    const result = sum * diff;
    return result;
}

const result =  add(10 , 20);
const result2 = give5();
const result3 = doMath(7,5)
console.log(result3)
console.log(result2)
console.log(result);
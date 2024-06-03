// function sum(x, y, z){

//     return x+y+z;
// }

function sum(x){
    return function sumY(){
    return function sumZ(z){
        return x+y+z;
    }
    }
}

const resultSum = sum(10); //60
console.log(resultSum);
const resultSumY = resultSum(20);
console.log(resultSumY);
const result = resultSum(30);
console.log(result);
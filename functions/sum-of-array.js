//Task : Sum of Array
let numbers = [10, 20, 30, 40];
function arraySum(n){
    let sum=0;
    for(let i=0;i<n.length;i++){
        sum+=numbers[i];
    }return sum;
}
console.log(arraySum(numbers));
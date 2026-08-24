//Task : Find the Missing Number
let numbers = [1, 2, 3, 4, 5];
function findMissing(arr,n){
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==i+1){
            return i+1;
        } 
    }return n;
}
console.log(findMissing(numbers, 6));
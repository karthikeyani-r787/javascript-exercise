//Task : Move All Zeros to the End
let numbers = [0, 10, 0, 20, 30, 0, 40];
function moveZeros(arr){
    let zero=[],non_zero=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0){
            zero.push(arr[i]);
        }else{
            non_zero.push(arr[i]);
        }
    }
    let result=[...non_zero,...zero] // copy or expand elements of array
    return result;
}
console.log(moveZeros(numbers));
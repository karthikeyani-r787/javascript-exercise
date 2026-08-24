//Task : Separate Even and Odd Numbers
let numbers = [10, 15, 20, 25, 30, 35];
function separateEvenOdd(arr){
    let even=[],odd=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            even.push(arr[i]);
        }else{
            odd.push(arr[i]);
        }
    }
    return {
        Even : even,
        Odd : odd
    };

}
console.log(separateEvenOdd(numbers));
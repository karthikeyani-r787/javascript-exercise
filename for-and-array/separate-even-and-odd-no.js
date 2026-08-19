//Task : Separate even and odd numbers
let numbers = [10, 15, 22, 31, 44, 57];
let odd=[];
let even=[];
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2==0){
        even.push(numbers[i]);
    }else{
        odd.push(numbers[i]);
    }
}
console.log(`odd : [${odd}]`);
console.log(`even : [${even}]`);
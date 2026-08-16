//task : count even number and odd number in an array
let numbers = [10, 15, 22, 33, 40, 51, 60];
let even_count=0;
let odd_count=0;
for (let i=0;i<numbers.length;i++){
    if(numbers[i]%2==0){
        even_count+=1;
    }
    else{
        odd_count++;
    }
}
console.log(`Total number of elements in the array : ${numbers.length}`)
console.log(`Count of Even numbers : ${even_count}`);
console.log(`Count of Odd numbers : ${odd_count}`);
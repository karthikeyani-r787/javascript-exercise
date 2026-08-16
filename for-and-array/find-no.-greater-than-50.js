//Task : Count numbers greater than 50
let numbers = [25, 65, 40, 80, 90, 35, 55];
let count=0;
for(let i=0;i<numbers.length;i++){
    if(numbers[i]>50){
        count++;
    }
}
console.log(`count of number greater than 50 : ${count}`);
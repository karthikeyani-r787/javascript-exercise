//task : find  given  numbers is even or odd
let numbers = [11, 20, 35, 42, 50, 67, 80];
for (let i=0;i<numbers.length;i++){
    if(numbers[i]%2==0){
        console.log(`${numbers[i]} is Even`)
    }else{
        console.log(`${numbers[i]} is Odd`)
    }
}
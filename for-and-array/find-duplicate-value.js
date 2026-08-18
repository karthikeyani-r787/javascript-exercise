//Task : Find duplicate numbers
let numbers = [10, 20, 10, 30, 20, 40, 10];
let duplicate=[];
for(let i=0;i<numbers.length;i++){
    for(let j=i+1;j<numbers.length;j++){
        if(numbers[i]===numbers[j]){
            if(!(duplicate.includes(numbers[i]))){
                    duplicate.push(numbers[i]);
            }
        }
    }
}
console.log(duplicate);
//Task : Count frequency of a number
let numbers = [10, 20, 10, 30, 10, 40, 20];
let duplicate=[]
for(let i=0;i<numbers.length;i++){
    let count=0;
    for(let j=0;j<numbers.length;j++){
        if(numbers[i]===numbers[j]){
            count++
        }
    }
    if(!duplicate.includes(numbers[i])){
        console.log(numbers[i],count);
        duplicate.push(numbers[i])
    }
       
}    


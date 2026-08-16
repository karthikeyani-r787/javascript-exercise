//Task : Remove negative numbers
let numbers = [10, -5, 20, -8, 30, -2, 40];
let non_neg=[]
for(let i=0;i<numbers.length;i++){
    if(numbers[i]>=0){
      non_neg.push(numbers[i]);   
    }
}console.log(non_neg)
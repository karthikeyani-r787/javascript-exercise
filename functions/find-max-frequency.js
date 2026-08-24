//Task : Find the Most Frequent Number
let numbers = [10, 20, 10, 30, 20, 10, 40,40,40,40, 20];
function mostFrequent(arr){
    let max=0,mostfrequent;
    for(let i=0;i<arr.length;i++){
        let count=0;
        for(let j=i;j<arr.length;j++){
          if(arr[i]===arr[j]){
            count++;
          }  
        }
        if(count>max){
            max=count;
            mostfrequent=arr[i];
        }
    }
    return mostfrequent;
}
console.log(mostFrequent(numbers));
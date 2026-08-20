//Task : Count Frequency
let numbers = [10, 20, 10, 30, 10, 40, 20];
function countFrequency(n,a){
    let count=0;
    for(let i=0;i<n.length;i++){
        if(n[i]==a){
            count++;
        }
    }
    return count;
}
console.log("Frequency of 10 : ",countFrequency(numbers, 10));
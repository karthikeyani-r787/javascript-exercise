//Task : Find the average
let marks = [80, 75, 90, 85, 70];
let sum=0;
for(let i=0;i<marks.length;i++){
     sum+=marks[i];
}
let avg=sum/marks.length;
console.log(`Average of array : ${avg}`)
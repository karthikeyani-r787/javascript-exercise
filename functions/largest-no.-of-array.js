//Task : Find Largest in Array
let numbers = [10, 50, 30, 80, 40];
function Largestno(n){
    let large=0;
    for(let i=0;i<n.length;i++){
        if(large<n[i]){
            large=n[i];
        }
    }
    return large;
}
console.log("Largest number of ",numbers,"is :",Largestno(numbers));

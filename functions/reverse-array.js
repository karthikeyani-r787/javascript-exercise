//Task : Reverse an Array
let numbers = [10, 20, 30, 40];
const func=(n)=>{
    let reverse=[];
    for(let i=n.length-1;i>=0;i--){
        reverse.push(n[i])
    }
    return reverse;
}
console.log("Reversed array : ",func(numbers));

//Task : Count Even Numbers
let numbers = [10, 15, 20, 25, 30];
function countEven(n){
    let count=0;
    for(let i=0;i<n.length;i++){
        if(numbers[i]%2==0){
            count++;
        }
    }
    return count;
}
console.log("Number of even no. in array using a variable : ",countEven(numbers));
//Alternate way
function countEvenno(n){
    let even_arr=[];
    for(let i=0;i<n.length;i++){
        if(numbers[i]%2==0){
            even_arr.push(numbers[i]);
        }
    }
    return even_arr.length;
}
console.log("Number of even no. in array using another array : ",countEvenno(numbers));
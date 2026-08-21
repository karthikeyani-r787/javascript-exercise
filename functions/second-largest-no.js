//Task : Find Second Largest
//logic : current value < large and second large > current value
let numbers = [10, 50, 30, 80, 40, 70];
secondLargest(numbers);  // function hoisting 
function secondLargest(n){
    let large=0;
    let second_large=0;
    for(let i=0;i<n.length;i++){
        if(large<n[i]){  
            second_large=large;
            large=n[i];
        }else if(second_large<n[i]){
            second_large=n[i];
        }
    }
    console.log(second_large)
}
//Task : Find Second Smallest
let numbers = [40, 120, 80, 12, 50, 310];
function secondSmallest(n){
    let small=Infinity,second_small=Infinity;    
    for(let i=0;i<n.length;i++){
        if(small>n[i]){
            second_small=small;
            small=n[i];
        }else if(second_small>n[i]){
            second_small=n[i];
        }
    }
    console.log("Second smallest number from ",n,"is :",second_small);
}
secondSmallest(numbers);
//Task : Remove Duplicate Numbers
let numbers = [10, 20, 10, 30, 20, 40];
function removeDuplicates(n){
    let duplicate=[];
    for(let i=0;i<n.length;i++){
        for(let j=i+1;j<n.length;j++){
            if(n[i]===n[j]){
            duplicate.push(n[i]);
            n.splice(j,1);
            j--;
        }
        }
        
    }return n;
}

console.log("Remove duplicate from ",numbers,"is");
console.log(removeDuplicates(numbers));

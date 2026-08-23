//Task : Count Frequency of Every Number
let numbers = [10, 20, 10, 30, 20, 10];
function countFrequency(n){
    let counted=[];
    for(let i=0;i<n.length;i++){
        let count=0;
        if(counted.includes(n[i])){
                continue;
            }
        for(let j=0;j<n.length;j++){
                if(n[i]===n[j]){
                count++;
                }            
        }
        counted.push(n[i]);
    console.log(n[i],"-->",count)
    }
}

countFrequency(numbers);
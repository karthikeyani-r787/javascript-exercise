//Task : Find Common Elements
let arr1 = [10, 20, 30, 40];
let arr2 = [20, 40, 50, 60];
function findCommon(a1,a2){
    let common=[];
    for(let i=0;i<a1.length;i++){
        for(let j=0;j<a2.length;j++){
            if(a1[i]===a2[j]){
                common.push(a1[i]);
            }
        }
    }
    return common;
}
console.log(findCommon(arr1, arr2));
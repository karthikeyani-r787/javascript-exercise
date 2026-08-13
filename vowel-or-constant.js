const prompt=require("prompt-sync")();
let letter=prompt("Enter a Lettet: ");
let letter_arr=['a','e','i','o','u','A','E','I','O','U'];
if(!(letter==0 || letter>0 || letter<0)){
    //if (letter.length === 1 && /[a-zA-Z]/.test(letter))
    let value="";
    for(let i=0;i<letter_arr.length;i++)
    {
        if (letter_arr[i]===letter){
            value="Vowel"
            break;
        }else{
            value="Constant"

        }  
    }
    console.log(`${letter} is ${value}`);
}
else{
    console.log(`${letter} is not a letter please enter a letter...`)
}

// if(letter==="a" || letter==='e' || letter==='i' || letter==='o' || letter==='u'){
//     console.log(`${letter} is a vowel `);
// }else{
//     console.log(`${letter} is a Constant `);
// }
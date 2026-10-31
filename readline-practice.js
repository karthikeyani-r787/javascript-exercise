const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question("Enter your favourite programming language: " , (lang) => {
    console.log("Your favourite language is ",lang);
    rl.question("Enter user name:",(name)=>{
        rl.question("Enter your age:",(age)=>{
        console.log(`name = ${name} and age = ${age}`);
        rl.close();
    });    
    });
})

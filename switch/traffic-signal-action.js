//task : Display the traffic signal action:
// Red → Stop
// Yellow → Ready
// Green → Go

const prompt=require("prompt-sync")();
let signal=prompt("Enter the Signal : ");
switch (signal){
    case 'red':
        console.log("Stop");
        break;
    case 'Red':
        console.log("Stop");
        break;
    case 'Yellow':
        console.log("Ready");
        break;
        case 'yellow':
        console.log("Ready");
        break;
    case 'Green':
        console.log("Go");
        break;
    case 'green':
        console.log("Go");
        break;
    
    default:
        console.log("Please  Enter a valid signal...")
}
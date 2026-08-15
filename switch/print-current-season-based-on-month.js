//task :  Display the current season based on month number.
const prompt = require("prompt-sync")();
let month_no=prompt("Enter a Month Number(1-12): ");
switch(month_no){
    case '1':
    case '2':
    case '12':
        console.log("Winter");
        break;
    case '3':
    case '4':
    case '5':
        console.log("Spring");
        break; 
    case '6':
    case '7':
    case '8':
        console.log("Summer");
        break;
    case '9':
    case '10':
    case '11':
        console.log("Autumn");
        break;
    default:
        console.log("Please Enter a valid Month number from 1 to 12...")
    }
// Task : Promise Chaining with Data
function getUser(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve({name: "Karthi",id: 101});
        },1000);
    })
}
function getMarks(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve({id: 101,marks: 85});
        },1000);
    })
}
function calculateResult(mark){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            if(mark >= 50){
            resolve("Pass");
        }else{
            reject("Fail");
        }
        },1000);
    })
}
getUser()
    .then((result) => {
        console.log("Name : ",result.name);
        return getMarks(result.id);
    })
    .then((result) => {
        console.log("Mark : ",result.marks);
        return calculateResult(result.marks);
    })
    .then((result) => {
        console.log("Result : ",result);
    })
    .catch((error) => {
    console.log("Result:", error);
    });
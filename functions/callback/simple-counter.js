//Task : Simple Counter
function counter(){
    let count=10;
    let s=setInterval(()=>{
        console.log(count);
        count--;
        if(count === 0){
            console.log("Times Up!")
            clearInterval(s);
        }
    },1000)
}counter();
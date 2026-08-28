//Task : Download Progress
let download = 0;
function load(down){
    console.log("Downloading...",down,"%");
    if(down === 100){
        console.log("Download completed!")
        clearInterval(inc)
    }
}
let inc = setInterval(()=>{
    download += 10;
    load(download);
},1000);
// timers and intervals
//setTimeout,clearTimeout
/*
setTimeout(function(){
    console.log("hello");
}, 5000);





setInterval(function(){
    console.log("hello");
}, 5000);



//clearTimeout

let tm = setTimeout(function(){
    console.log("hello");
}, 5000);

clearTimeout(tm)



//setInterval

let tm = setInterval(function(){
    console.log("hello");
}, 5000);

clearInterval(tm)




let count = 10;

let interval = setInterval(function (){
    if(count>=0){
         console.log(count);
        count--;
       
    }
    else clearInterval(interval);
}, 1000);

*/


//downlode 
let count = 0;
let sec=5;
let progress = document.querySelector(".progress-bar");
let percentText = document.querySelector("#percentText");

setInterval(function(){
    if(count<=99){
        count++;
       progress.style.width = `${count}%`;
       percentText.textContent = `${count}%`;
    }
},  sec * 1000/100);
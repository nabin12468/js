//Event binding: addEventListener,removeEventListener

// browser mein page par koi bhi harkat karo event raise ho jaayega

// kuch screen par ho aur aapko reaction dene ho to us waaqt aapko event handle karna aana chahiye

//event matlab hota hai koi action hua

//event listener ka matlab hai aapne koi action ka reaction diya
/* 
let h1 = document.querySelector("h1");

h1.addEventListener("click", function(){
    h1.style.color = "red";
} )



let p = document.querySelector("p");
p.addEventListener("click", function(){
    p.style.color = "green";
})



let p = document.querySelector("p");

p.addEventListener("dblclick", function(){
    p.style.color = "yellow";
});

//eventlistener

Element.addEventListener("event name", function(){
    Element.style.color = ""
})
    


   //removeEventListener

let p = document.querySelector("p");

function dblclick(){
    p.style.color = "yellow";
};

p.addEventListener("dblclick",dblclick);
p.removeEventListener("dblclick",dblclick);



//Common events:click,input,change,submit,mouseover,keyup


let inp = document.querySelector("input");

inp.addEventListener("input", function (){
    console.log("typed");
})


//inputlistener

let inp = document.querySelector("input");

inp.addEventListener("input", function (dets){
    if (dets.data !== null){
        console.log(dets.data);
    };
})



//change event : tab chlta hai jab aapka koi input select ya textarea mein koi change hojaaye.

let sel = document.querySelector("select");
let device = document.querySelector("#device");

sel.addEventListener("change", function (dets){
    //console.log(dets.target.value);
    device.textContent = `${dets.target.value} Device Selected`;
});




//approach

let h1 = document.querySelector("h1");

window.addEventListener("keydown", function(dets){
    if(dets.key== ""){
        h1.textContent= "SPC";

    }
    else{
        h1.textContent = dets.key;
    }
})

*/

//change

let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#fileinp");

btn.addEventListener("click", function(){
    fileinp.click();
});

fileinp.addEventListener("change", function(dets){
    const file = dets.target.files[0];
    if(file){
        btn.textContent= file.name;
    }
    
});
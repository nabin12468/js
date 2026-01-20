//form and form validation
/*
let nm = document.querySelector("#name");
let form = document.querySelector("form");

form.addEventListener("submit", function (dets){
    dets.preventDefault();

    if(nm.value.length <= 2){
        document.querySelector("#hide").style.display = "initial";

    }
    else{
         document.querySelector("#hide").style.display = "none";
    }
    

    
});



//js-based vallidation

let nm = document.querySelector("#name");
let form= document.querySelector("form");

form.addEventListener("submit", function(dets){
    dets.preventDefault();

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let ans=  regex.test("harsh@test.com")
    console.log(ans);
});

*/

//email/password validator



let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = dodcument.querySelector("form");

form.addEventListener("submit", function (dets){
    dets.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

let emailans = emailRegex.test(email.value);
let passwordans = passwordRegex.test(password.value);

if(!emailans){
    document.querySelector("#emailError").textContent = "Email is incorrect";
    document.querySelector(".error").style.display = "initial"

}
if(!passwordans){
    document.querySelector("#passwordError").textContent = "password is incorrect"
    document.querySelector(".error").style.display = "initial";
}
});


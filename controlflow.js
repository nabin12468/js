// if else else if 
// switch case
// early return psttern


/*

switch (1) {
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");

        break;
    case 3:
        console.log("three");
        break;
}



// early return pattern

function example(age) {
    if (age<25)  return "A";
    else if (age<50)  return "B";
    else if (age<70)  return "C";
    else return "D"
}
console.log(example(12))  


// (Q)
function getGrade(score){
    if (score>=90 && score <=100) 
        
            return "A+";
     if (score>=80 && score <=89)return "A";
     if (score>=60 && score <=79)return "B+";
     if (score>=50 && score <=69) return "B";
     if (score>=40 && score <=59) return "fail";
    
    
    else return "Invalid marks"

    

    

    

} 

console.log(getGrade(11))

*/

//rock paper scissor

function rps (user,computer){

    if (user === computer) return "draw"
    if(user ==="rock" && computer === "scissor") return "user";
    if(user ==="paper" && computer === "rock") return "user";
    if(user ==="scissor" && computer === "paper") return "user";
    return "computer"
}

console.log (rps("rock","paper"))
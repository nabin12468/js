//array

/*

let marks = [1,2,3,4];
arr[2]=5;//add the array
console.log(marks);



let arr = [1,2,3,4,5]
arr.push(299)
console.log(arr)
arr.pop(2)
console.log(arr)



let arr = [1,2,3,4,5]
arr.shift();
console.log(arr)



let arr = [1,2,3,4,5]
arr.unshift(0);
console.log(arr)



let arr = [1,2,3,4,5]
arr.splice(2,2);
console.log(arr)




let arr = [1,2,3,4,5];
let newarr = arr.slice(0,3);
console.log(newarr)





let arr = [1,2,3,4,5];
arr.reverse();
console.log(arr);



let arr = [1,6,3,4,5];
arr.sort(function(a,b){
    return b-a
});
console.log(arr);



//forEach

let arr = [1,2,22,11,31];
arr.forEach(function (val){
    console.log(val+3);
});




//map
let arr = [1,2,22,11,31];

// map srf tab use karna hai job aapko ek naya array banana hai pichhle array ke data ke basis par


//map dekhda bitikai auta blank array banaunu parxa

let newarr = arr.map(function(val){
    if (val >10) return val;
})

console.log(newarr)  //new array banauna pary ma map use garna

*/

//filter

let arr = [1,2,3,4,5,6,7,8];
 let newarr = arr.filter(function (val){

     if (val > 4) return true;
 });
 console.log(newarr)


 
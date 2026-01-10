//object


/*
let obj = {
    name : "nabin",
    age: 19,
    khana: "masu bhat",


};
obj.age     //or obj['age] or obj[aa]



//key value structure

let obj = {
    name:"nabin"
}
obj['name']




//nesting

const user = {
    name: "nabin",
    address: {
        city:"butwal",
        pin:12345,
        location: {
            lat: 23.2,
            lng: 77.9
        },

    },
};
user.address.location.lng; //let {lat,lng} = user.address.locations;


let obj = {
name: "nabin",
age: 19,
email: "test@yoyo .com",

};

for(let key in obj ){
    console.log(key);
}


let obj = {
name: "nabin",
age: 19,
email: "test@yoyo .com",

};

Object.keys(obj);


//copying object

let obj = {
name: "nabin",
age: 19,
email: "test@yoyo .com",

};

let obj2 = {...obj};

*/

//deep clone

let obj = {
name: "nabin",
age: 19,
email: "test@yoyo .com",
address: {
    city: "butwal",

},

};

let obj2 = JSON.parse(JSON.stringify(obj))

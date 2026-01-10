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



//optional chaining

let obj = {
name: "nabin",
age: 19,
email: "test@yoyo .com",
address: {
    city: "butwal",

},

};
obj?.address?.city




//computed properties

let role = "admin";

let obj = {
name: "nabin",
age: 19,
email: "test@yoyo .com",
address: {
    city: "butwal",

},
[role]: "harsh",

};



//Can an object key be a number or boolean? Try this 
const obj ={
    true: "yes",
    42: "answer",

};
console.log(obj[42]);



//access the value of "first-name" from this object:

const user = {
    "first-name": "nabin",
};

user['first-name']



//given a dynamic key let key = "age", how will you access user[key]?

let key = "key";

const user = {
    age: 26,
};
console.log(user[key]);





//from the object below, print the latitude:

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
user?.location?.lat


//destructive the key "first-name" as a variable called firstname.

const user = {
    "first-name": "nabin",

};
let {"first-name": firstName} = user;

*/

//use for-in to log all keys in this object:

const course = {
    title: "javaScript",
    duration: "4 weeks",
};

for(let key in course){
    console.log(key);
}
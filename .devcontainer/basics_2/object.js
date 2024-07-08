const name2 = Symbol ("hkey")

const obj1 = {
    name : "ankur chuahan",
    college : "ABESIT",
    [name2]: "hkey",
    age: 21,
    Place : "Uttarakhand",
    Days : ["SUnday", "Monday", "Tuesday", "wednesday", "thursday", "friday", "sat"]
    }
// console.log(obj1["name"]);
// console.log(obj1["age"]);
// console.log(obj1[name2]);

obj1.name = "Ankur Kumar Chauhan"
// Object.freeze(obj1); 

console.log(obj1);

obj1.hola = function(){
    console.log("Ankur Chauhan")
};

obj1.hola1 = function(){
    console.log(`My name is, ${this.name}`);
};

console.log(obj1.hola());
console.log(obj1.hola1());
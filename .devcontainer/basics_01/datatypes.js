// alert(3+3) // We are using nodejs, not browser
console.log(3+3);
console.log("Ankur");
let name = "Ankur"
let age = 21
let Logged_In = true

/* datatypes :
number: 2 to power 53
bigint
string => ""
boolean => True / Flase
null => Standalone value
undefined => 
Symbol


Object
*/

console.log(typeof "Ankur");
console.log(typeof null); // datatype is object
console.log(typeof undefined); // datatype is undefined
// typeof is used to identify the type of datatype.
console.log("The datatype of age is",typeof age);

// 1 and 0 to boolean true and false.

let roku1 = 1

let tosh1 = Boolean(roku1)
console.log(tosh1);

let roku2 = 0

let tosh2 = Boolean(roku2)
console.log(tosh2);

// 1 = true, 0 = false
// " " = false
// "Ankur" = true

// number to string conversion

let somenum = 44

let somechar = String(somenum)

console.log(somechar);
console.log(typeof(somechar));
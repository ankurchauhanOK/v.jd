const bgmiuser = {}
bgmiuser.id = "abc123"
bgmiuser.usernamename = "Cutetauji"
bgmiuser.Name = "Ankur Chauhan"
bgmiuser.isLoggedIn = false

console.log(bgmiuser);

const regularuser = {
    fullname : {
        userfullname : {
            firstname : "Ankur",
            lastname : "Chauhan"
        }
    }
}
console.log(regularuser);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);
//spread method for combining objects

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const ankur = [
    {
        id: 1,
        username: "ankurchuahanok"
    },{
        id: 2,
        username: "ankurchuahanok"
    },{
        id: 3,
        username: "ankurchuahanok"
    }
]
console.log(ankur[2].id);
console.log(bgmiuser);
console.log(Object.keys(bgmiuser));
console.log(Object.values(bgmiuser));
console.log(Object.entries(bgmiuser));
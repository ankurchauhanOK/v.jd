let mydate = new Date();

// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());

// let myremembereddate = new Date(2022, 7,6);
// console.log(myremembereddate.toDateString());

// let timestamp = Date.now()
// console.log(timestamp);

// console.log(myremembereddate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newdate = new Date()

// console.log(newdate.getMonth() + 1);
// console.log(newdate.getDay());
// console.log(newdate.getTime().toLocaleString());

newdate.toLocalString('default',{
    weekday : "Long",
})
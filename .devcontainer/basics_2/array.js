let arr =[1,2,3,4,5,6]
// arr.push(9)
// arr.pop()
// arr.unshift(9)
// arr.shift()
// console.log(arr)
// console.log(arr.includes(9))
// console.log(arr.indexOf(5));

// let new_array = arr.join()
// console.log(new_array);
console.log(`Original array is: ${arr}`);

let arr3 = arr.slice(1,3)
console.log(`${arr}`);
console.log(`Value in slice is: ${arr3}`)

let arr2 = arr.splice(1,4)
console.log(`${arr}`);
console.log(`The array after splice is: ${arr2}`);
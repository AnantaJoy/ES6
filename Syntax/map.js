// Array.map() will generate a new array
// Array.map() does not modify the original array

let age = [23, 32, 54, 24, 52, 33, 52];

const newArray =age.map((val) => {
    return val + 5;
})

console.log(newArray);



// Array.reduce()

const array = [3,2,3,4,5,6,7];

const newArray = array.reduce((accumulator, value) => {
    return accumulator + value;
}, 0)

console.log(newArray);
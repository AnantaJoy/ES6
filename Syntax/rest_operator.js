// In array

let array = [23, 24, 25, 33];

let [firstValue, secondValue, ...rest] = array;
console.log(firstValue, secondValue, rest);

// In function

function restFunction(x, y, ...z){
    console.log(x, y, z);
}

restFunction(1, 2, 3, 4, 5, 6, 7, 8, 9);

// In object

let person = {
    name: 'Joy',
    age : 22,
    dept : 'EEE',
    university : 'Rajshahi University'
}

let {name, age, ...restObject} = person;
console.log(name, age, restObject);
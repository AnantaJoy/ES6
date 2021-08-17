let primeNumber = [2,3,5,7,11];
let [a,,c,d] = primeNumber;
console.log(c);

// Deconstructing a object

let Person = {
    name : 'John',
    age : 21,
    dept : 'EEE',
    university : 'Rajshahi University'
}
// Variable conflict
// let name = 4
let {name, age, dept} = Person;
console.log(name);
console.log(age);

// function destructuring

function destruct({ name } = {}) {
    console.log(`Hello ${name}`);
}
destruct(Person);
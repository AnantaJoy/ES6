// Arrow function in JavaScript

const arrow = () => console.log("Hello World!");

arrow();

const addTwo = (num1 = 5, num2=10) =>{
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
} 

addTwo(10,20);
addTwo();
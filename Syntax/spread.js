// In object

let cat = {
    name : 'Amine',
    age : 3,
    sound : 'Mewww'
}

let catExtended ={
    ...cat,
    born: 'Bangladesh'
}

console.log(catExtended);

// In array

let array1 = [1, 2, 3, 4, 5, 6, 7];
let array2 = [8, 9, 10, 11, 12, 13, 14, 15]
let array3 = [...array1, ...array2]

console.log(array3);
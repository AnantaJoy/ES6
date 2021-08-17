function userInfo(){
    if(true){
        var user = 'ananta'
        console.log(user);
    }
    // user is out of scope but still available
    console.log(user);

}

userInfo();

// using let keyword we can solve the problem
function userInfo(){
    if(true){
        let user = 'ananta';
        console.log(user);
    }
    // user is out of scope but still available
    // console.log(user);

}

userInfo();

// const keyword
const piValue = 3.1416;
piValue = 4;
console.log(piValue);
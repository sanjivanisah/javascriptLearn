//browser kei andar global object is window object
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this); output same as if written outside the function 
//     console.log(this.username);
// } // undefined coz "this" sirf objects kei liye hota hai functions kei liye nahi

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); //undefined
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);//{}
    console.log(this.username);//undefined
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => {username: "hitesh"} //undefined parenthesis is necessary
const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
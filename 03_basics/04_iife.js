 // Immediately Invoked Function Expressions (IIFE)

// to remove polution from global scope and immdiately invoke function we use iife

// named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
})(); 

// ()() //func def ,func execution call

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

//iife sei pehle kuch bhi ho uss statement mein semicolon zaroori hai isliye pehle iife mein semicolon hai agar a=0 bhi likha hota toh aisa hona chahiye  a=0;


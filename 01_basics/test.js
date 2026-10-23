a=9;

(function chai(name){
    console.log(`DB CONNECTED ${a}`);
})("kola")

b=0;

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
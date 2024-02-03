//console.log(global);

global.setTimeout(() =>{
    console.log('In the timeout');
    clearInterval(int);
}, 3000 )

const int = setInterval( ()=> {
    console.log("One second has passed");
}, 1000) 


console.log(__dirname);
console.log(__filename)
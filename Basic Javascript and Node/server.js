const http  =require('http');
const fs = require('fs')
const _ = require('lodash');

const server = http.createServer((req , res) => {
    
    //lodash
    const num = _.random(0,20);
    console.log(num);

    const greet = _.once(()=>{
        console.log("Hello there, this can only be called once")
    })

    greet();
    greet();

    //Set header content type

    // res.setHeader('Content-Type' , 'text/html');

    // let path = './Views' ;
    // switch(req.url){
    //     case '/':
    //         path+= 'index.html';
    //         res.statusCode = 200;
    //         break;
    //     case 'about':
    //         path += 'accounts.html';
    //         res.statusCode = 200;
    //         break;
    //     case 'about-me':
            
    //         res.statusCode = 301;
    //         res.setHeader('Location' , '/about');
    //         res.end();
    //         break;
    //     default:
    //         path += 'login.html';
    //         res.statusCode = 404;
    //         break;
    // }



    // //Send an HTML
    // fs.readFile('./Views/index.html' , (err , data) =>{
    //     if(err){
    //         console.log(err);
    //         res.end();
    //     }else{
            
    //         res.end(data);
    //     }
    // })


});

server.listen( 3000 , 'localhost' , ()=> {
    console.log("Listening for request on port 3000")
} );


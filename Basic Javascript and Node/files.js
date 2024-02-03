const fs = require('fs');

// Read files
/*

fs.readFile('./Files/blog01.txt' , (err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})

console.log("Done before, written after")

*/

//Write files

/*

fs.writeFileSync('./Files/blog02.txt' , 'hello again' , () =>{
    console.log('file was written')
} )

*/

//directories

/*
if(!fs.existsSync('./Assets')){
    fs.mkdir( './Assets' , (err)=>{
        if(err){console.log(err);
        }
        console.log("folder created");
    } )
    
}else{
    fs.rmdir('./Assets' , ()=> {
        console.log("Folder removed")
    })
}
*/



//delete files
if(fs.existsSync('./Files/blog01.txt')){
    fs.unlink('./Files/blog01.txt' , ()=>{
        console.log("Found file and deleted it")
    } )
}else{
    console.log("File doesn't exist")
}
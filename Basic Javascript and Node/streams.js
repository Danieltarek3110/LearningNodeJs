const fs = require('fs')

const readStream = fs.createReadStream( './Files/blog01.txt' , {encoding: 'utf8' }  );
const writeStream = fs.WriteStream('./Files/blog03.txt');

/*
readStream.on('data' , (chunk)=> {
    console.log("-----New Chunk--------")
    console.log(chunk);
    writeStream.write(chunk);

    

} )

*/

//PIPING

readStream.pipe(writeStream);
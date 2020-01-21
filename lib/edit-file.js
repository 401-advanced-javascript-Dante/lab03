'use strict' ;


const fs = require('fs') ;
const util = require('util') ;




// first method will be callback function 

// const readerFunctionCallback = (file , callback) => {
//     fs.readFile(file ,(err , data) => {
//         if (err) {callback(err);}
//         else { callback(undefined , data)}
//     });
// };




// read with promise method
const readTheFile = util.promisify(fs.readFile) ;
const readerFunctionPromise = (file) => {
    return readTheFile(file)
        .then( (data) => {
        //  console.log(data.toString());
         return data.toString().trim()

        })
        .catch(error => error)
}


const writeOnFile = util.promisify(fs.writeFile) ;
const writerFunctionPromise = (file , data) => {
    return writeOnFile(file , data)
        .then( (output) => {
            console.log(output) ;
            let result = output.toString().trim() 
            return result.name = data ;
        })
        .catch(error => error)
}



module.exports = { readerFunctionPromise ,writerFunctionPromise };
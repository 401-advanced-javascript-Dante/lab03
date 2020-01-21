'use strict' ;


const fs = require('fs') ;
const util = require('util') ;




// first method will be callback function 

const readerFunctionCallback = (file , callback) => {
    fs.readFile(file ,(err , data) => {
        if (err) {callback(err);}
        else { callback(undefined , data)}
    });
};










// const readTheFile = util.promisify(fs.readFile) ;
// const readerFunctionPromise = (file) => {
//     return readTheFile(file)
//         .then( data => {
//             console.log(data);
//         })
//         .catch(error => error)
// }



module.exports = { readerFunctionCallback };
'use strict'



//  we use mocking in the demo 
// jest.mock('fs');


const editor = require('../../lib/edit-file') ;
const path = require("path");
describe('file modules' , () => {

    describe('using promise ' , () => {
        it('check if i can read the file as a string' , () => {
            let file = `${__dirname}/../../data/person.json`;
            // let fileName = path.basename(file);
            // process.argv.push(fileName);
            // console.log(fileName) ;
            return editor.readerFunctionPromise(file)
                .then( (data) => { 
                    expect(typeof(data.toString().trim())).toEqual('string')
                })
        })

        it('check if Accepts a file name as a command line parameter' , () => {
            let file = `${__dirname}/../../data/person.json`;
            let fileName = path.basename(file);
            process.argv.push(fileName);
            expect(process.argv[process.argv.length-1]).toEqual(fileName);
        })

        it('Alter some values in the object' , () => {
            let file = `${__dirname}/../../data/person.json`;
            let data = 'ali' ;
            return editor.writerFunctionPromise(file , data )
                .then( (output) => {
                    expect(output.firstName).toEqual('ali');
                } )

        })


    
    })  



// describe('callback method' , () => {
//     it('check the error if the name is wrong' , (check) => {
//         let file = `${__dirname}/../../data/person.json`;
//         editor.readerFunctionCallback(file , (err ,data) => {
//             console.log('check the data', data.toString());
//             console.log(process.argv);

//             expect(err).toBeDefined();
//             check();
//         });
//     });
// });



})
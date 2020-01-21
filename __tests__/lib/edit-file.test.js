'use strict'



//  we use mocking in the demo 
// jest.mock('fs');


const editor = require('../../lib/edit-file') ;


describe('file modules' , () => {


describe('callback method' , () => {
    it('check the error if the name is wrong' , (check) => {
        let file = `${__dirname}/../../data/person.json`;
        editor.readerFunctionCallback(file , (err ,data) => {
            console.log(data.toString());
            expect(err).toBeDefined();
            check();
        });
    });
});



})
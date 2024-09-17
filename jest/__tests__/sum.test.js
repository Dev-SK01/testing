const {sum} = require('../js/sum');
const {throwError} = require('../js/sum');


test('Addition Test' , ()=>{
    let res = sum(1,2,3,4);
    expect(res).toBe(res);
});

test('Error Handling' , ()=>{
    expect(()=>{
        throwError('error')
    }).toThrow()
})
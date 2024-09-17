const testPromise = require('../js/promise');

test('Promise Resolved' , ()=>{
    expect(testPromise()).resolves.toBe('promise resolved')
});

// test('Promise Rejected' , ()=>{
//     expect(testPromise()).rejects.toThrow('promise rejected')
// });

test('Async Function Test' , async()=>{
   const data = await testPromise();
   expect(data).toBe('promise resolved')
} )
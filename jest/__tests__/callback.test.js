const callbackTest = require('../js/callback') 

test("It's an callBack Test" , done =>{
    function callback(data){
       try{
          expect(data).toBe("I'm callback");
          done();
       }catch(err){
        done(err)
       }
       callbackTest(callback);
    }
})
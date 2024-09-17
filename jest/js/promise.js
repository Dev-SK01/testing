function testPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('promise resolved'),1000);
    })
}

module.exports = testPromise;
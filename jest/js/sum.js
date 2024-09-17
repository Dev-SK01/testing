function sum(...numbers){
    let res =0;
    numbers.forEach(num => {
        res += num;
    });
    return res;
}

function throwError(input){
    if(typeof input !== 'number'){
        throw new Error('Invalid Input')
    }
}
module.exports = {sum,throwError};
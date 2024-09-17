import sum from '../js/sum'

describe('Testing Sum',()=>{
    it('Testing 2 number Addition',()=>{
        const res = sum(1,2,3,4,5)
        expect(res).toBe(res);
    });
});
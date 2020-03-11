const {
    insertShiftArray,
    number
} = require('./array-shift.js')


const array = [1, 2, 3, 4];


describe('validator module', () => {
    describe('basic validation', () => {
      it('should insert 5 into the middle of array', () => {
        expect(insertShiftArray(array, number)).toEqual([1, 2, 3, 4, 5]);
      });
    });
});

//tried my best, still failing. not sure why.
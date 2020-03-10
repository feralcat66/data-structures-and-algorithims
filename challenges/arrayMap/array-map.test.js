const {
    map,
    add5
} = require('./array-map.js')
//import functions

//define array for test
const array = [1, 2, 3];

describe('validator module', () => {
    describe('basic validation', () => {
      it('should add 5 to each number', () => {
        expect(map(array, add5)).toEqual([6, 7, 8]);
      });
    });
});
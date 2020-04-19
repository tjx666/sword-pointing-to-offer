const assert = require('assert');
const findNumberIn2DArray = require('../../src/04/findNumberIn2DArray');

describe('#04-findNumberIn2DArray', () => {
    const testArray = [
        [1, 4, 7, 11, 15],
        [2, 5, 8, 12, 19],
        [3, 6, 9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30],
    ];

    it('should return true when array includes target', () => {
        assert.ok(findNumberIn2DArray(testArray, 5));
    });

    it('should return false when array not include target', () => {
        assert.strictEqual(findNumberIn2DArray(testArray, 20), false);
    });
});

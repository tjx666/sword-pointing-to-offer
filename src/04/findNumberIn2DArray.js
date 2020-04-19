/**
 * 题述：二维数组中的查找
 * 思路：利用题目给定的限定条件，同一行往右递增，同一列往下递增，考虑从右上角开始查找
 * 时间复杂度：最多需要遍历 m + n 次也就是最后遍历到左下角
 * 空间复杂度：0
 * 
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * @example
 *
 * [
 *  [1,   4,  7, 11, 15],
 *  [2,   5,  8, 12, 19],
 *  [3,   6,  9, 16, 22],
 *  [10, 13, 14, 17, 24],
 *  [18, 21, 23, 26, 30]
 * ]
 *
 * target: 5 return: true
 * target: 20 return: false
 *
 */
function findNumberIn2DArray(matrix, target) {
    const array2DLength = matrix.length;
    if (array2DLength === 0) return false;

    const array1DLength = matrix[0].length;
    let i = 0;
    let j = array1DLength - 1;
    while (i < array2DLength && j >= 0) {
        console.log(i, j);
        const val = matrix[i][j];
        if (val === target) return true;

        if (val > target) {
            j--;
        } else {
            i++;
        }
    }

    return false;
}

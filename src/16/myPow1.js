/**
 * 题述：数值的整数次方
 * 思路：最简单直接的循环乘以 x n -1 次
 * 时间复杂度：n
 * 空间复杂度：0
 * 尴尬的是超时...
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function myPow(x, n) {
    if (x === 1) return 1;

    let abs = Math.abs(n);
    let result = 1;
    while (abs-- >= 1) {
        result *= x;
    }
    return abs > 0 ? result : 1 / result;
}

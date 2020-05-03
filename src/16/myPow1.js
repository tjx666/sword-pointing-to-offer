/**
 * 题述：数值的整数次方
 * 思路：最简单直接的连乘 x n 次
 * 时间复杂度：n
 * 空间复杂度：0
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function myPow(x, n) {
    if (x === 1 || x === 0) return x;
    if (x === -1) return n % 2 === 0 ? 1 : -1;

    let absN = Math.abs(n);
    let result = 1;
    while (absN-- >= 1) {
        result *= x;
    }
    return n >= 0 ? result : 1 / result;
}

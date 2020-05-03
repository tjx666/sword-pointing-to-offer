/**
 * 题述：数值的整数次方
 * 思路：非递归版快速幂，是自底向上的，可以利用二进制位对应累乘次数来求解
 * 时间复杂度：log₂n
 * 空间复杂度：0
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function myPow(x, n) {
    let result = 1;
    let absN = Math.abs(n);
    while (absN !== 0) {
        if ((absN & 1) === 1) {
            result *= x;
        }

        x *= x;
        absN >>>= 1;
    }
    return n >= 0 ? result : 1 / result;
}

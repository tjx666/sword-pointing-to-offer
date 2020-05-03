/**
 * 题述：数值的整数次方
 * 思路：
 * 如果 exponent 是偶数，Power(base, exponent) = Power(base, exponent / 2) * Power(base, exponent / 2)
 * 如果 exponent 是奇数，Power(base, exponent) = base * Power(base, exponent / 2) * Power(base, exponent / 2)
 * 时间复杂度：log₂n
 * 空间复杂度：log₂n
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function myPow(x, n) {
    if (x === 1 || x === 0) return x;
    if (x === -1) return n % 2 === 0 ? 1 : -1;

    function absMyPow(base, exponent) {
        if (exponent === 0) return 1;

        if (exponent === 1) return base;

        const halfPow = absMyPow(base, (exponent / 2) | 0);
        return halfPow * halfPow * (exponent % 2 === 0 ? 1 : base);
    }

    const result = absMyPow(x, Math.abs(n));
    return n >= 0 ? result : 1 / result;
}

/**
 * 题述：斐波那契数列
 * 思路：迭代
 * 时间复杂度：n
 * 空间复杂度：0
 * @param {number} n
 * @return {number}
 */
function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let a = 0;
    let b = 1;

    for (let i = 2; i <= n; i++) {
        [a, b] = [b, (a + b) % 1000000007];
    }

    return b;
}

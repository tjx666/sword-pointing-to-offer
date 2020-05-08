/**
 * 题述：斐波那契数列
 * 思路：递归 + 备忘录
 * 时间复杂度：n
 * 空间复杂度：n
 * @param {number} n
 * @return {number}
 */
function fib(n) {
    const notes = new Array(n);
    notes[0] = 0;
    notes[1] = 1;
    function fibRecursive(num) {
        if (notes[num] !== undefined) return notes[num];
        const result = (fibRecursive(num - 1) + fibRecursive(num - 2)) % 1000000007;
        notes[num] = result;
        return result;
    }
    return fibRecursive(n);
}

/**
 * 题述：剪绳子
 * 思路：递归 + 记忆
 * 时间复杂度：n 平方
 * 空间复杂度：n
 * @param {number} n
 * @return {number}
 */
function cuttingRope(n) {
    const cache = new Map([[2, 1]]);
    function memorizedHelper(num) {
        if (cache.has(num)) return cache.get(num);
        let max = 1;
        for (let i = 1; i < num; i++) {
            max = Math.max(max, i * (num - i), i * memorizedHelper(num - i));
        }
        cache.set(num, max);
        return max;
    }

    return memorizedHelper(n);
}

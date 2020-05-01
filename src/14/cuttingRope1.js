/**
 * 题述：剪绳子
 * 思路：回溯法，最近回溯法上瘾
 * 超时...
 * @param {number} n
 * @return {number}
 */
function cuttingRope(n) {
    let max = Number.MIN_SAFE_INTEGER;
    const path = [];
    function backTrace() {
        if (n === 0) {
            max = Math.max(
                max,
                path.reduce((acc, item) => acc * item),
            );
        }

        for (let i = 1; i <= n; i++) {
            path.push(i);
            n -= i;
            backTrace();
            path.pop();
            n += i;
        }
    }
    backTrace();

    return max;
}

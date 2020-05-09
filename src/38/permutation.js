/**
 * 题述：字符串全排列
 * 思路：回溯，通过 set 保存走过的字符来剪枝
 * 时间复杂度：n!
 * 空间复杂度：n*n
 * @param {string} s
 * @return {string[]}
 */
function permutation(s) {
    const { length } = s;
    if (s == null) return [];
    if (length <= 1) return [s];

    const chars = s.split('');
    const result = [];
    function backTrace(currentIndex) {
        if (currentIndex === length - 1) {
            result.push(chars.join(''));
            return;
        }
        for (let i = currentIndex, set = new Set(); i < length; i++) {
            if (set.has(chars[i])) {
                continue;
            } else {
                set.add(chars[i]);
            }
            [chars[currentIndex], chars[i]] = [chars[i], chars[currentIndex]];
            backTrace(currentIndex + 1);
            [chars[currentIndex], chars[i]] = [chars[i], chars[currentIndex]];
        }
    }
    backTrace(0);
    return result;
}

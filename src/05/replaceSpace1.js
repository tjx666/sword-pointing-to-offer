/**
 * 题述：将字符串中的空格替换成 20%
 * 思路：这道题用正则简直是大材小用，直接一次遍历每次碰到空格就处理一下当前的空格即可，需要注意的是当碰到空格，下标加 3
 * 
 * 时间复杂度：每次需要从头遍历到尾，所以时间复杂度 n
 * 空间复杂度：假设每一个元素都是空格，每次遍历一个元素需要构造 3 个新的字符串：s.slice(0, i)，s.slice(i + 1) 以及它们的组合，所以空间复杂度 3n
 * @param {string} s
 * @return {string}
 * @example
 *
 * 输入：s = "We are happy."
 * 输出："We%20are%20happy."
 *
 */
function replaceSpace(s) {
    if (s.length === 0) return s;

    let i = 0;
    while (i < s.length) {
        if (s[i] === ' ') {
            s = `${s.slice(0, i)}%20${s.slice(i + 1)}`;
            i += 3;
        } else {
            i++;
        }
    }

    return s;
}

module.exports = replaceSpace;

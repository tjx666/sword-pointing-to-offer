/**
 * 题述：将字符串中的空格替换成 20%
 * 思路：正则就很简单了，由于题目没说是单行字符串，所以需要正确设置正则 flag
 * @param {string} s
 * @return {string}
 * @example
 *
 * 输入：s = "We are happy."
 * 输出："We%20are%20happy."
 *
 */
function replaceSpace(s) {
    return s.replace(/ /gm, '%20')
}

module.exports = replaceSpace;

/**
 * 题述：请实现一个函数，输入一个整数，输出该数二进制表示中 1 的个数。例如，把 9 表示成二进制是 1001，有 2 位是 1。因此，如果输入 9，则该函数输出 2。
 * 思路：位运算，将 n 和 n - 1 进行与操作会把 n 最后一个 1 转换为 0
 * 时间复杂度：0，比解法一效率还高
 * 空间复杂度：0
 * @param {number} n - a positive integer
 * @return {number}
 */
function hammingWeight(n) {
    let oneCount = 0;
    while (n !== 0) {
        oneCount++;
        n &= n - 1;
    }
    return oneCount;
}

/**
 * 题述：请实现一个函数，输入一个整数，输出该数二进制表示中 1 的个数。例如，把 9 表示成二进制是 1001，有 2 位是 1。因此，如果输入 9，则该函数输出 2。
 * 思路：位运算，将 n 和 1 进行与运算，结果非零说明第一位为 1，然后不断将 1 左进位，重复之前的的操作
 * 时间复杂度：0，循环 32 次
 * 空间复杂度：0
 * @param {number} n - a positive integer
 * @return {number}
 */
function hammingWeight(n) {
    let mask = 1;
    let oneCount = 0;
    for (let i = 0; i < 31; i++, mask <<= 1) {
        if ((n & mask) !== 0) {
            oneCount++;
        }
    }
    return oneCount;
}

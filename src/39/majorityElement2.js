/**
 * 题述：数组中出现次数超过一半的数字
 * 思路：排序后中间的那个数就是
 * 时间复杂度：排序算法的复杂度
 * 空间复杂度：排序算法的空间复杂度
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
    nums.sort((a, b) => a - b);
    return nums[(nums.length / 2) | 0];
}

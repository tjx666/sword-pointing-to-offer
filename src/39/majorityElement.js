/**
 * 题述：数组中出现次数超过一半的数字
 * 思路：使用 map 保存遍历过的数字的遍历次数
 * 时间复杂度：n，最复杂的的情况就是需要遍历最后
 * 空间复杂度：n，最复杂的的情况是多数元素以外的数字都不一样，这种情况 map 占据二分之一
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
    const traversalMap = new Map();
    for (let i = 0, len = nums.length, halfLen = (len / 2) | 0; i < len; i++) {
        const updatedCount = ~~traversalMap.get(nums[i]) + 1;
        traversalMap.set(nums[i], updatedCount);
        if (updatedCount > halfLen) {
            return nums[i];
        }
    }
}

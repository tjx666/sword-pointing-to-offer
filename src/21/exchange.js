/**
 * 题述：将数组的奇数排在偶数前
 * 思路：快慢双指针，慢指针保存最后一个奇数的下标
 * 时间复杂度：n，n 为 nums 长度
 * 空间复杂度：0
 * @param {number[]} nums
 * @return {number[]}
 */
function exchange(nums) {
    const { length } = nums;
    if (length <= 1) return nums;
    let slow = -1;
    for (let fast = 0; fast < length; fast++) {
        if (nums[fast] % 2 !== 0) {
            if (slow !== -1 || nums[fast - 1] % 2 === 0) {
                [nums[slow + 1], nums[fast]] = [nums[fast], nums[slow + 1]];
            }
            slow++;
        }
    }
    return nums;
}

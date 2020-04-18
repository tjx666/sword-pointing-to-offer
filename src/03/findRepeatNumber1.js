/**
 * 分类：数组
 *
 * 题述：
 * 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。
 * 请找出数组中任意一个重复的数字。
 *
 * 思路：最简单也是最容易想到的就是遍历每一个元素，判断该元素是否之前有没有出现过，可以使用 set 来保存已经遍历过的元素
 *
 * @param {number[]} nums
 * @return {number}
 * @example
 *
 * 输入：
 * [2, 3, 1, 0, 2, 5, 3]
 * 输出：2 或 3
 *
 */
function findRepeatNumber(nums) {
    const traveledSet = new Set();
    for (let i = 0, len = nums.length; i < len; i++) {
        if (traveledSet.has(nums[i])) return nums[i];

        traveledSet.add(nums[i]);
    }
}

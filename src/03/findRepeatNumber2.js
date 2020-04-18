/**
 * 分类：数组
 *
 * 题述：
 * 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。
 * 请找出数组中任意一个重复的数字。
 *
 * 思路
 * 注意到题目的限定条件，数字是在 0~n-1，联想到位图，让每个下标位置存储和下标相同的节点。
 * 具体到这道题就是遍历每一个元素，如果当前下标上的元素值和下标相同的就遍历下一个元素，i++
 * 如果不同就把当前元素值和原始值代表的下标元素比较，相同的话那你就已经找到重复元素了，如果不同，i 不 ++
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
    const { length } = nums;
    let i = 0;
    while (i < length) {
        const val = nums[i];
        if (val === i) {
            i++;
            continue;
        }

        if (nums[val] === val) {
            return val;
        }

        [nums[i], nums[val]] = [nums[val], nums[i]];
    }
}

/**
 * 求递增数组旋转后的最小值
 * 思路：二分
 * 算法复杂度：log₂n
 * 空间复杂度：常数级
 *
 * @param {number[]} numbers
 * @return {number}
 */
function minArray(numbers) {
    let i = 0;
    let j = numbers.length - 1;
    while (i < j) {
        const mid = ((i + j) / 2) | 0;
        if (numbers[mid] > numbers[j]) {
            i = mid + 1;
        } else if (numbers[mid] < numbers[j]) {
            j = mid;
        } else {
            j--;
        }
    }

    return numbers[i];
}

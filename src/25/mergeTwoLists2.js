/**
 * 题述：合并两个有序链表
 * 思路：递归
 * 时间复杂度：m + n
 * 空间复杂度：0，栈空间参与计算就是 m + n
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists(l1, l2) {
    if (l1 == null) return l2;
    if (l2 == null) return l1;

    let min = l1;
    let max = l2;
    if (min.val > max.val) [min, max] = [max, min];
    min.next = mergeTwoLists(min.next, max);
    return min;
}

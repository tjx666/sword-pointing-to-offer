/**
 * 题述：合并两个有序链表
 * 思路：同时遍历两个链表，将更小的那个节点放到新链表
 * 时间复杂度：m + n
 * 空间复杂度：0
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists(l1, l2) {
    if (l1 == null) return l2;
    if (l2 == null) return l1;

    let i = l1;
    let j = l2;
    const sentinel = { val: null, next: null };
    let tail = sentinel;

    while (i != null || j !== null) {
        let min;
        if (j == null || (i != null && i.val <= j.val)) {
            min = i;
            i = i.next;
        } else {
            min = j;
            j = j.next;
        }
        tail.next = min;
        tail = min;
    }
    tail.next = null;

    return sentinel.next;
}

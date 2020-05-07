/**
 * 题述：链表反转
 * 思路：原地反转
 * 时间复杂度： n，n 为链表节点数目
 * 空间复杂度：0
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
    if (head == null || head.next == null) return head;

    let previous = head;
    let current = head.next;
    while (current != null) {
        const { next } = current;
        current.next = previous;
        previous = current;
        current = next;
    }
    head.next = null;

    return previous;
}

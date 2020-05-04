/**
 * 题述：给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。返回删除后的链表的头节点。
 * 思路：使用哨兵节点方便删除第一个节点
 * 算法复杂度：n
 * 空间复杂度：0
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function deleteNode(head, val) {
    if (head == null) return head;

    const sentinel = { val: null, next: head };
    let previous = sentinel;
    let current = head;
    while (current != null && current.val !== val) {
        previous = current;
        current = current.next;
    }

    if (current != null) {
        previous.next = current.next;
    }
    return sentinel.next;
}

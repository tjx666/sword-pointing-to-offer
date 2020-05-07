/**
 * 题述：获取链表倒数第 k 个节点
 * 思路：利用递归遍历链表是反向遍历
 * 时间复杂度：n，n 为节点数
 * 空间复杂度：0
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function getKthFromEnd(head, k) {
    let i = 0;
    let resultNode;
    function recursive(node) {
        if (node == null) return;
        recursive(node.next);
        i++;
        if (i === k) {
            resultNode = node;
        }
    }
    recursive(head);
    return resultNode;
}

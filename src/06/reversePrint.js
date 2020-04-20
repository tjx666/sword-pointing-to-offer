/**
 * 题述：反向打印链表
 * 思路：利用递归和栈类似的先进后出行为
 * 时间复杂度：n, 递归类似循环
 * 空间复杂度：n，递归需要栈空间
 *
 * @param {ListNode} head
 * @return {number[]}
 * @example
 * 
 * 输入：head = [1,3,2]
 * 输出：[2,3,1]
 * 
 */
function reversePrint(head) {
    const result = [];
    function helper(node) {
        if (node == null) return;
        helper(node.next);
        result.push(node.val);
    }
    helper(head);
    return result;
}

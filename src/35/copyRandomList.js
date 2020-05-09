/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * 题述：链表深拷贝
 * 思路：针对链表的特点写个深拷贝即可
 * @param {Node} head
 * @return {Node}
 */
function copyRandomList(head) {
    const map = new WeakMap();
    function cloneDeep(node) {
        if (node === null) return null;
        if (typeof node === 'number') return node;

        if (map.has(node)) {
            return map.get(node);
        }
        const newNode = { val: node.val };
        map.set(node, newNode);
        newNode.next = cloneDeep(node.next);
        newNode.random = cloneDeep(node.random);
        return newNode;
    }
    return cloneDeep(head);
}

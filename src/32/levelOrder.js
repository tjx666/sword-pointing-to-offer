/**
 * 题述：从上到下打印二叉树
 * 思路：其实就是层序遍历，使用队列保存当前层节点，每次推出当前层的节点并追加下一层节点
 * 时间复杂度：n, 每次遍历树的一个节点操作一次
 * 空间复杂度：n
 * @param {TreeNode} root
 * @return {number[]}
 */
function levelOrder(root) {
    if (root == null) return [];

    const queue = [root];
    const result = [];
    while (queue.length !== 0) {
        for (let i = 0; i < queue.length; i++) {
            const { val, left, right } = queue.shift();
            result.push(val);
            if (left) {
                queue.push(left);
            }

            if (right) {
                queue.push(right);
            }
        }
    }
    return result;
}

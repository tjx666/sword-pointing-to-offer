/**
 * 题述：二叉树路径之和
 * 思路：利用回溯节省空间
 * 时间复杂度：n，将所有节点遍历了一遍
 * 空间复杂度：n，为单链表的情况
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
function pathSum(root, sum) {
    if (root == null) return [];

    const result = [];
    const path = [];

    function recursive(node, rest) {
        if (node == null) return;

        path.push(node.val);
        if (node.left == null && node.right == null && node.val === rest) {
            result.push([...path]);
        }
        recursive(node.left, rest - node.val);
        recursive(node.right, rest - node.val);
        path.pop();
    }

    recursive(root, sum);
    return result;
}

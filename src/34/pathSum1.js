/**
 * 题述：二叉树路径之和
 * 思路：非递归前序遍历保存在栈中的除了节点外还需要保存路径信息
 * 时间复杂度：n，将所有节点遍历了一遍
 * 空间复杂度：n平方
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
function pathSum(root, sum) {
    if (root == null) return [];

    const result = [];
    const stack = [{ node: root, path: [root.val] }];
    while (stack.length !== 0) {
        const { node, path } = stack.pop();

        if (node.right) {
            stack.push({ node: node.right, path: [...path, node.right.val] });
        }

        if (node.left) {
            stack.push({ node: node.left, path: [...path, node.left.val] });
        }

        if (
            node.left == null &&
            node.right == null &&
            path.reduce((acc, item) => acc + item, 0) === sum
        ) {
            result.push(path);
        }
    }

    return result;
}

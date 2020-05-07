/**
 * 题述：反转二叉树
 * 思路：非递归遍历
 * 时间复杂度：n
 * 空间复杂度：n
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function mirrorTree(root) {
    if (root == null) return null;
    const stack = [root];
    while (stack.length !== 0) {
        const top = stack.pop();
        [top.left, top.right] = [top.right, top.left];
        if (top.right) {
            stack.push(top.right);
        }

        if (top.left) {
            stack.push(top.left);
        }
    }
    return root;
}

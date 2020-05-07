/**
 * 题述：反转二叉树
 * 思路：递归
 * 时间复杂度：n
 * 空间复杂度：0,算栈空间就是 n
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function mirrorTree(root) {
    if (root == null) return null;
    [root.left, root.right] = [root.right, root.left];
    mirrorTree(root.left);
    mirrorTree(root.right);
    return root;
}

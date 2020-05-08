/**
 * 题述：判断二叉树是否镜像对称
 * 思路：先写一个函数判断两颗树是否镜像对称
 * 时间复杂度：n
 * 空间复杂度：需要 n 的栈空间
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
    return isTwoTreeSymmetric(root, root);
}

function isTwoTreeSymmetric(root1, root2) {
    if (root1 == null && root2 == null) return true;
    if (root1 == null || root2 == null) return false;
    if (root1.val !== root2.val) return false;
    return (
        isTwoTreeSymmetric(root1.left, root2.right) && isTwoTreeSymmetric(root1.right, root2.left)
    );
}

/**
 * 题述：树的子结构
 * 思路：
 * 若树 B 是树 A 的子结构，则子结构的根节点可能为树 A 的任意一个节点。
 * 遍历 A 的每一个节点，判断 B 是否是以当前节点为根节点的子结构
 * 时间复杂度：M*N
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
function isSubStructure(A, B) {
    return (
        A !== null &&
        B !== null &&
        (isSub(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B))
    );
}

function isSub(nodeA, nodeB) {
    if (nodeB == null) return true;
    if (nodeA == null) return false;
    if (nodeA.val !== nodeB.val) return false;
    return isSub(nodeA.left, nodeB.left) && isSub(nodeA.right, nodeB.right);
}

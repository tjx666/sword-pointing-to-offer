/**
 * 题述：根据前序和中序数组还原二叉树
 * 思路：递归
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(preorder, inorder) {
    const { length } = preorder;
    if (length === 0) return null;

    const inorderMap = new Map();
    for (let i = 0; i < length; i++) {
        inorderMap.set(inorder[i], i);
    }
    let preIndex = -1;

    function helper(left, right) {
        if (left > right) return null;

        preIndex++;
        const root = { val: preorder[preIndex], next: null };
        const index = inorderMap.get(preorder[preIndex]);
        root.left = helper(left, index - 1);
        root.right = helper(index + 1, right);

        return root;
    }

    return helper(0, length - 1);
}

// buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
/*
    3
9     20
    15   7
*/
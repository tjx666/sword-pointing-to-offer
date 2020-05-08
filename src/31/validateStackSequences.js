/**
 * 题述：输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。假设压入栈的所有数字均不相等。
 * 思路：使用辅助栈模拟入栈出栈
 * 时间复杂度：N，每个元素最多出栈入栈一次出栈
 * 空间复杂度：N，也就是全部入栈再出栈的情况
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
function validateStackSequences(pushed, popped) {
    const { length } = pushed;
    if (length === 0) return true;

    const helperStack = [];
    for (let i = 0, j = 0; i < length; i++) {
        if (pushed[i] === popped[j]) {
            j++;
            while (j < length && helperStack[helperStack.length - 1] === popped[j]) {
                helperStack.pop();
                j++;
            }
        } else {
            helperStack.push(pushed[i]);
        }
    }

    return helperStack.length === 0;
}

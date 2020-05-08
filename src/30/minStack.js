/**
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。
 */

/**
 * initialize your data structure here.
 */
function MinStack() {
    this.elements = [];
    this.helperStack = [];
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.elements.push(x);
    const currentMin = this.helperStack[this.helperStack.length - 1];
    if (currentMin === undefined) {
        this.helperStack.push(x);
    } else {
        this.helperStack.push(Math.min(currentMin, x));
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.elements.length--;
    this.helperStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.elements[this.elements.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    return this.helperStack[this.helperStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */

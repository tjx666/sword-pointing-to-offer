const CQueue = function () {
    this.stack1 = [];
    this.stack2 = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
    const { stack1, stack2 } = this;
    const { length } = stack1;

    if (length === 0) {
        stack1.push(value);
    } else {
        for (let i = 0; i < length; i++) {
            stack2.push(stack1.pop());
        }
        stack1.push(value);
        for (let j = 0; j < length; j++) {
            stack1.push(stack2.pop());
        }
    }
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
    const front = this.stack1.pop();
    return front === undefined ? -1 : front;
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

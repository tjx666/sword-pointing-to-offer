/**
 * 题述：
 * 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。
 * 路径可以从矩阵中的任意一格开始，每一步可以在矩阵中向左、右、上、下移动一格。
 * 如果一条路径经过了矩阵的某一格，那么该路径不能再次进入该格子。
 * 例如，在下面的3×4的矩阵中包含一条字符串“bfce”的路径（路径中的字母用加粗标出）。
 *
 * [["a","b","c","e"],
 * ["s","f","c","s"],
 * ["a","d","e","e"]]
 *
 * 但矩阵中不包含字符串“abfb”的路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入这个格子。
 *
 * 思路：
 * 这其实又是一道组合题，从任意一格按规定计算出所有可能路径，判断是否有一个路径的字符组成的词和给定的词相同
 * 具体实现上其实使用的是 dfs，为了节省状态空间，我们可以使用回溯法
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
    const rowCount = board.length;
    const colCount = board[0].length;
    let wordIndex = 0;

    // 起点可能是任意一个空格
    for (let i = 0; i < rowCount; i++) {
        for (let j = 0; j < colCount; j++) {
            if (backTrace(i, j)) return true;
        }
    }

    function backTrace(i, j) {
        if (i < 0 || i >= rowCount || j < 0 || j >= colCount || board[i][j] !== word[wordIndex]) {
            return false;
        }

        if (wordIndex === word.length - 1) return true;

        const temp = board[i][j];
        board[i][j] = null;
        wordIndex++;
        const isExisted =
            backTrace(i - 1, j) ||
            backTrace(i + 1, j) ||
            backTrace(i, j - 1) ||
            backTrace(i, j + 1);
        board[i][j] = temp;
        wordIndex--;
        return isExisted;
    }

    return false;
}

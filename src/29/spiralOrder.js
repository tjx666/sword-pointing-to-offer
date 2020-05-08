/**
 * 题述：顺时针打印矩阵
 * 思路：定义变量保存当前需要遍历的步数和方向
 * 时间复杂度：m * n
 * 空间复杂度：0
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
    const rowCount = matrix.length;
    if (rowCount === 0) return [];
    const colCount = matrix[0].length;
    if (colCount === 0) return [];

    const result = new Array(rowCount * colCount);
    let resultIndex = 0;
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];
    let dIndex = 0;
    let horizontalSteps = colCount;
    let verticalSteps = rowCount;
    let step = horizontalSteps;
    let i = 0;
    let j = -1;

    while (step > 0) {
        while (step-- > 0) {
            i += directions[dIndex][0];
            j += directions[dIndex][1];
            result[resultIndex++] = matrix[i][j];
        }
        dIndex = (dIndex + 1) % 4;
        if (dIndex % 2 === 0) {
            horizontalSteps--;
            step = horizontalSteps;
        } else {
            verticalSteps--;
            step = verticalSteps;
        }
    }

    return result;
}

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix === null || matrix.length === 0 || matrix[0].length === 0) return false;
    let col = matrix[0].length, row = matrix.length;
    let left = 0, right = col * row - 1;
    while (left <= right) {
        let mid = parseInt((right-left) / 2 + left );
        let val = matrix[parseInt(mid/col)][mid%col];
        if (val === target) {
            return true;
        } else if (val > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
};

let m = [[1,3,5,7],[10,11,16,20],[23,30,34,50]]

console.log(searchMatrix(m, 3));
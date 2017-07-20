/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if(matrix.length === 0 ) return false
  if(matrix[0].length === 0) return false
    
  let last = matrix[0].length - 1
  for (let i = 0; i < matrix.length; i++) {

    if (matrix[i][0] <= target) {
      if (matrix[i][last] >= target) {
        if (binSearch(matrix[i], target)) return true
      }
    }
  }
  return false

};

let binSearch = (arr, target) => {
  let start = 0, len = arr.length, end = len - 1, mid
  if (len === 1 && arr[0] === target) return true
  while (start < end ) {
    mid = Math.ceil((start + end) / 2)
    if (arr[mid] > target) end = mid
    if (arr[mid] < target) start = mid
    if (arr[mid] === target) return true
    if (end-start===1) {
      if(arr[start]===target || arr[end]===target) return true
      break
    }
    
  }
  return false
}

console.log(binSearch([1, 4], 4));

let matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
// console.log(searchMatrix(matrix, 20));


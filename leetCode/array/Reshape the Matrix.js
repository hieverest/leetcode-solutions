/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  if (!nums.length) return nums;
  let shape = nums.length * nums[0].length;
  if (shape !== r * c) return nums;

  let flatNums = nums.reduce((acc, num) => {
    return [...acc, ...num];
  }, [])

  if (r === 1) return [flatNums]
  let result = [], x = 0;

  for (let i = 0; i < r; i++) {
    let temp = []
    for (let j = 0; j < c; j++) {
      temp.push(flatNums[x])
      x++;
    }
    result.push(temp)
  }
  return result;
};

console.log(matrixReshape([[1, 2],
[3, 4]], 4, 1));
console.log(matrixReshape([[1, 2],
[3, 4]], 1, 4));
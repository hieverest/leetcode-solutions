/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let maxSoFar = max = nums[0]
  for( let i=1; i<nums.length; i++) {
    max = Math.max(nums[i], nums[i] +max)
    maxSoFar = Math.max(max, maxSoFar)
  }
  return maxSoFar
};

let arr =[-2,1,-3,4,-1,2,1,-5,4]
let arr2 = [-2, -1]
console.log(maxSubArray(arr));
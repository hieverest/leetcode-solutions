/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if(nums.length=== 0) return 0
  if(nums.length=== 1) return 1

  let maxLen = 1, maxLenSoFar = 1
  for(let i=1; i<nums.length; i++) {
    if(nums[i]>nums[i-1]) {
      maxLen += 1
      maxLenSoFar = Math.max(maxLenSoFar, maxLen)
    } else {
      maxLen = 1
    }
  }
  return maxLenSoFar
};

console.log(lengthOfLIS([]));
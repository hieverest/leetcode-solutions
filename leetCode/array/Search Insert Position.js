/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  for(let i =0; i< nums.length; i++) {
    if(i === 0 && nums[i] > target) return i
    if(i=== nums.length-1 && nums[i]<target) return i+1

    if (nums[i]===target) {
      return i 
    } else {
      if(nums[i]<target && nums[i+1]>target) {
        return i+1
      }
    }
  }
};

console.log(searchInsert([1,3,5,6], 6));
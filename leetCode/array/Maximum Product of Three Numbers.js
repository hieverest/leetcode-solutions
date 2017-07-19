/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  
  nums.sort((a,b)=> a-b);
  let l = nums.length;
  return Math.max( nums[0]*nums[1]*nums[l-1], nums[l-1]*nums[l-2]*nums[l-3] )
};

console.log(maximumProduct([1000,1000,2,1,2,5,3,1]));
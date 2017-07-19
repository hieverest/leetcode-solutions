/**
 * @param {number[]} nums
 * @return {number}
 */

// My answer below: 
// var findMin = function (nums) {
//   let len = nums.length
//   if(len === 1) return nums[0]
//   if(len === 2) return nums.reduce( (pre, cur)=> Math.min(pre, cur))
//   if(nums[0]<nums[len-1]) return nums[0]
//   if(nums[len-1]<nums[len-2] ) return nums[len-1]

//   let start = 0, end = nums.length - 1, mid, firstNum = nums[0]
//   while (start < end - 1) {
//     mid = parseInt((start + end) / 2)
//     if (nums[mid] > firstNum) start = mid
//     if (nums[mid] < firstNum) {
//       if( nums[mid] < nums[mid-1] ) return nums[mid]
//       end = mid
//     }
//   }
// };

// 牛逼的递归做法, 添加参数的方法太牛了
var findMin = function(nums, i = 0, j = nums.length - 1) {
  // 两句话解决了4个edge case! [0], [1,2], [1,2,3], [2,1]
  if (nums[i] < nums[j]) return nums[i] // 这句话是用来解决未作倒置的case的
  if (j - i < 2) return nums[j] 

  const half = Math.floor((i + j) / 2)

  return nums[i] < nums[half] ? findMin(nums, half, j) : findMin(nums, i, half)
};

console.log(findMin([4,5,6,7,1,2]));
console.log(findMin([3,1,2]));
console.log(findMin([5,1,2,3]));
console.log(findMin([1,2,3]));
/**
 * @param {number[]} nums
 * @return {number}
 */

 // 效率跟我是一样的, 但是一个三元运算在简洁性上把我秒杀了. 
 // the efficiency of both time and space is same as mine. However, the concision beats mine by using the conditional(ternary) operator. 
var findLHS = function (nums) {
  const f = {}
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    f[nums[i]] = f[nums[i]] ? f[nums[i]] + 1 : 1
    if (f[nums[i] - 1]) res = Math.max(res, f[nums[i] - 1] + f[nums[i]])
    if (f[nums[i] + 1]) res = Math.max(res, f[nums[i] + 1] + f[nums[i]])
  }
  return res
};


// var findLHS = function (nums) {
//   let hashMap = {}, max = 0
//   nums.forEach(num => {
//     if (hashMap.hasOwnProperty(num)) {
//       hashMap[num] += 1
//       hashMap.hasOwnProperty(num - 1) && (max = Math.max(max, hashMap[num - 1] + hashMap[num]))
//       hashMap.hasOwnProperty(num + 1) && (max = Math.max(max, hashMap[num] + hashMap[num + 1]))
//     } else {
//       hashMap[num] = 1
//       hashMap.hasOwnProperty(num - 1) && (max = Math.max(max, hashMap[num - 1] + hashMap[num]))
//       hashMap.hasOwnProperty(num + 1) && (max = Math.max(max, hashMap[num] + hashMap[num + 1]))
//     }
//   })
//   return max
// };

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
console.log(findLHS([2, 2, 2]));
console.log(findLHS([]));
console.log(findLHS([1, 2, 2, 2, 2, 3, 4]));
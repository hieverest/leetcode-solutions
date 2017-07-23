/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  let hashMap = {}, max = 0
  nums.forEach( num=> {
    if(hashMap.hasOwnProperty(num)) {
      hashMap[num] += 1
      hashMap.hasOwnProperty(num-1) && (max = Math.max(max, hashMap[num-1]+hashMap[num]))
      hashMap.hasOwnProperty(num+1) && (max=Math.max(max, hashMap[num]+hashMap[num+1]) )
    } else {
      hashMap[num] = 1
      hashMap.hasOwnProperty(num-1) && (max = Math.max(max, hashMap[num-1]+hashMap[num]))
      hashMap.hasOwnProperty(num+1) && (max=Math.max(max, hashMap[num]+hashMap[num+1]) )
    }
  })
  return max
};

console.log(findLHS([1,3,2,2,5,2,3,7]));
console.log(findLHS([2,2,2]));
console.log(findLHS([]));
console.log(findLHS([1,2,2,2,2,3,4]));
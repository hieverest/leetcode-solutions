/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count =0, stats = []
    for (let num of nums) {
      if (num === 1) {
        count ++
      } else {
        stats.push(count)
        count = 0
      }
    }
    stats.push(count)
    let max = stats.reduce((acc, val) => acc > val ? acc : val, 0)
    return max
}; 
// time complexity: O(n); space complexity: O(n)

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));
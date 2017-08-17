/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  return n>0 && ((n & (n-1)) === 0);
};

// 4 ways to solve this question
// https://discuss.leetcode.com/topic/47195/4-different-ways-to-solve-iterative-recursive-bit-operation-math
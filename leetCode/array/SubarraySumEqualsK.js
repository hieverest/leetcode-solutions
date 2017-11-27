// dp solution; but hashmap could be better.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let sum = 0;
    let dp = [];
    dp[0] = 0;
    let count = 0;
    for (let i = 1; i < nums.length + 1; i++) {
        sum += nums[i-1];
        dp[i] = sum;
        for (let j = 0; j < i; j++) {
            if (sum - dp[j] == k) count++;
        }
    }
    return count;
    
};


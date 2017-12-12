/**
 * 
 * 
 * Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:
Input:nums = [1,1,1], k = 2
Output: 2
Note:
The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].

 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

 // DP Solution
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


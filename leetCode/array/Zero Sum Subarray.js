/**
 * 
 * lintcode: (138) Subarray Sum
GeeksforGeeks: Find if there is a subarray with 0 sum - GeeksforGeeks

Given an integer array, find a subarray where the sum of numbers is zero.
Your code should return the index of the first number and the index of the last number.

Example
Given [-3, 1, 2, -3, 4], return [0, 2] or [1, 3].

Note
There is at least one subarray that it's sum equals to zero.

 */

 const zeroSum = nums => {
     if (nums.length === 0) return res;
     const map = new Map();
     let sum = 0;
     for (let i = 0; i < nums.length; i++) {
         sum += nums[i];
         if (sum === 0) {
             return [0, i];
         }
         if (map.has(sum)) {
             let index = map.get(sum) + 1;
             return [index, i];
         }
         map.set(sum, i);
     }
     return [];
 }

 let nums = [-5, 10, 5, -3, 1,1,1, -2, 3, 4];
 
 console.log(zeroSum(nums));
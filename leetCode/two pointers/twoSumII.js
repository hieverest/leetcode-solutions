/**
 * Given an array of integers, find how many pairs in the array such 
 * that their sum is bigger than a specific target number. 
 * Please return the number of pairs.
    Example
        Given numbers = [2, 7, 11, 15], target = 24. Return 1. (11 + 15 is the only pair)
    Challenge
    Do it in O(1) extra space and O(nlogn) time.
 */

 function twoSumII(arr, k) {
    arr.sort( (a,b) => a - b);
    let count = 0;
    let left = 0, right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum >= k) {
            count += right - left;
            right--;
        } else {
            left++;
        }
    }
    return count;

 }

 let arr = [1,2,3,4,5,6], k = 8;

 console.log(twoSumII(arr, k));
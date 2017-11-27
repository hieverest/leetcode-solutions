/*
Given an array nums of n integers, find two integers in nums such that the sum is closest to a given number, target.+

Return the difference between the sum of the two integers and the target.

Example+

Given array nums = [-1, 2, 1, -4], and target = 4.
The minimum difference is 1. (4 - (2 + 1) = 1).
*/

const twoSumClosest = (arr, k) => {
    if (arr.length === 0) return -1;
    arr.sort( (a,b) => a -b );
    let left = 0, right = arr.length - 1;
    let min = Infinity;
    while (left < right) {
        let sum = arr[left] + arr[right];
        let diff = Math.abs(k - sum);
        if (diff === 0) {
            return 0;
        } else if ( diff < min) {
            min = diff;
        }
        if (sum > k) {
            right--;
        } else {
            left++;
        }
    }
    return min;
}

let arr = [-1, 2, 1, -4];
console.log(twoSumClosest(arr, 4));


/*
Given an array nums and a target value k, find the maximum length of a subarray that sums to k. If there isn't one, return 0 instead.

Note:
The sum of the entire nums array is guaranteed to fit within the 32-bit signed integer range.

Example 1:
Given nums = [1, -1, 5, -2, 3], k = 3,
return 4. (because the subarray [1, -1, 5, -2] sums to 3 and is the longest)
*/

const func = (arr, k) => {
    const map = new Map();
    let sum = 0;
    let max = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        let diff = sum - k;

        if (sum === k) {
            max = Math.max(max, i + 1);
        }
        if (map.has(diff)) {
            max = Math.max(max, i - map.get(diff));
        }
        if (!map.has(sum)) {
            map.set(sum, i);
        }
    }
    return max;
}

let arr = [1, -1, 5, -2, 3];
console.log(func(arr, 3));
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if (nums.length === 0) return [-1,-1];
    let left = 0, right = nums.length - 1;
    let start = -1, end = -1;
    while (left <= right) {
        let mid = parseInt((right - left) / 2 + left);
        if (nums[mid] === target && (mid === 0 || nums[mid-1] < target) ) {
            start = mid;
            break;
        } else if (nums[mid] >= target ) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = parseInt((right - left) / 2 + left);
        if (nums[mid] === target && (mid === nums.length - 1 || nums[mid + 1] > target) ) {
            end = mid;
            break;
        } else if (nums[mid] <= target ) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return [start, end];
};

let arr = [5,7,7,8,8,10]

console.log(searchRange(arr, 8));
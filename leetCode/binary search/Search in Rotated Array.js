/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length === 0) return -1;
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = parseInt( (right - left)/ 2 + left);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] >= nums[left]) {
            // case 1: mid is in the left part
            if (target >= nums[left] && nums[mid] > target) { // Ensure mid and target is in the same part;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // case 2: mid is in the right part
            if (target < nums[left] && nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
};

let arr = [1, 3];
console.log(search(arr, 3));
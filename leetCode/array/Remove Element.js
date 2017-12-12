/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let left = 0;
    for (let num of nums ) {
        if (num !== val) {
            nums[left++] = num;
        }
    }
    return left;
    
};
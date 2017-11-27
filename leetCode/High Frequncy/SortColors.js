/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let colors = [0, 0, 0];
    let res = [];
    for (let num of nums) {
        if (num === 0) {
            colors[0]++;
        } else if (num === 1) {
            colors[1]++;
        } else {
            colors[2]++;
        }
    }
    let color = 0;
    for(let i = 0; i < nums.length; i++) {
        while (colors[color] === 0) color++;
        nums[i] = color;
        colors[color]--;
    }
};

// Solution II
const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const sortColorsII = (nums) => {
    let max = Math.max.apply(undefined, nums), min = Math.min.apply(undefined, nums);
    let left = 0, right = nums.length - 1;
    let i = left;
    while (min < max) {
        while (i <= right) {
            if (nums[i] === max) {
                swap(nums, i, right);
                right--;
            } else if (nums[i] === min) {
                swap(nums, i, left);
                left++;
                i++;
            } else i++;
        }
        i = left;
        min++;
        max--;
    }
}
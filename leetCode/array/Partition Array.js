/**
 * @param nums: The integer array you should partition
 * @param k: An integer
 * @return: The index after partition
 */
const partitionArray = function (nums, k) {
    if (nums.length === 0) return 0;
    let left = 0, right = nums.length - 1;
    while (left < right) {
        if (nums[left++] >= k) {
            swap(nums, --left, right--);
        }
    }
    if (nums[left] < k) {
        return left+1;
    }
    return left;
}

const swap = (nums, i, j) => {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

const partitionArray2 = function (nums, k) {
    let count = 0;
    for (let n of nums) {
        if (n < k) count++;
    }
    return count;
}


let arr = [4,5,7,1,3,2,2,1];

console.log(partitionArray(arr, 4));
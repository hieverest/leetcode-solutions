/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b) // quick sort big O is O(NlogN)
  let result = [], i = 0, j = 0;
  // below big O is O(N)
  while (i < nums1.length && j < nums2.length) {
    while (i > 0 && nums1[i] === nums1[i - 1]) {
      i++
    }
    while (nums1[i] < nums2[j] && i < nums1.length) {
      i++
    }
    while (nums1[i] > nums2[j] && j < nums2.length) {
      j++
    }
    if (nums1[i] === nums2[j]) {
      result.push(nums1[i]);
      i++;
      j++;
    };
  }

  return result

};


console.log(intersection([1], [2, 2, 2,1]));



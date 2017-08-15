/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
class TreeNode {
  constructor(val) {
    this.val = val
    this.left = this.right = null
  }
}

var sortedArrayToBST = function (nums) {
  if(nums.length === 0 ) return null
  let upper = nums.length - 1, tree = new BST()
  let convert = (upper, lower) => {
    if (lower <= upper) {
      let mid = Math.floor((upper + lower) / 2)
      tree.insert(nums[mid])
      convert(upper, mid+1)
      convert(mid-1, lower)
      return tree.root
    } 
  }
  return convert(upper, 0, tree, nums)
};



class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let n = new TreeNode(data);
    if (this.root === null) {
      this.root = n;
    } else {
      let current = this.root;
      while (true) {
        if (data < current.val) {
          if (current.left === null) {
            current.left = n;
            break;
          }
          current = current.left;
        }
        else {
          if (current.right === null) {
            current.right = n;
            break;
          }
          current = current.right;
        }
      }
    }
  }
}

let testArr = [0, 1, 2, 3, 4, 5, 6]
console.log(sortedArrayToBST(testArr));


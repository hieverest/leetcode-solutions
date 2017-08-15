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
  let len = nums.length
  let resTree = new BST()
  for(let i =2; i<len;i *=2) {
    for(let j = 1; j< i; j += 2) {
      let index = Math.floor(j/i*len)
      resTree.insert(nums[index])
    }
  }
  return resTree.root
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
        if (data < current.data) {
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

let test = [0,1,2,3,4,5,6,7,8,9,10]
console.log( sortedArrayToBST(test));
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
// 大神级的递归
var hasPathSum = function(root, sum) {
    if (root === null) {
        return false;
    }
    
    if (root.left === null && root.right === null && sum == root.val) {
        return true;
    }
    
    if (hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)) {
        return true;
    }
    
    return false;
};

// 我的解法
var hasPathSum = function (root, sum) {
  let result = null
  let calSum = (node, curSum) => {
    if (node) {
      curSum += node.val
      if (!node.left && !node.right) {
        console.log(curSum);
        if(curSum === sum) result = true
      }
      calSum(node.left, curSum)
      calSum(node.right, curSum)
    }
  }
  calSum(root, 0)
  if(result) return true
  else return false

};
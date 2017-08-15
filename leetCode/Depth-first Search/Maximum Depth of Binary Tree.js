/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// time: O(n)
var maxDepth = function (node) {

  if (node === null) return 0;
  
  var left = maxDepth(node.left);
  var right = maxDepth(node.right);
  return Math.max(left, right) + 1;

};




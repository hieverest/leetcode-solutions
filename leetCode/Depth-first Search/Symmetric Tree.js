/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if(root === null) return true
  return dfs(root.left, root.right)
};

let dfs = (left, right) => {
  if( (!left && right) || (left && !right) ) return false
  if(!left&&!right) return true
  if(left.val === right.val) {
    return dfs(left.left, right.right) && dfs(left.right, right.left)
  } else return false
  
}
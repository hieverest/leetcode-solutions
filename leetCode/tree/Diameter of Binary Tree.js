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
var diameterOfBinaryTree = function(root) {
  return dfs(root, 0)
};

let calHalfSideDiameter = node => {
  if(node === null) return 0
  let diameter = 0, left = 0, right = 0
  if(node.left) left = calHalfSideDiameter(node.left) +1
  if(node.right) right = calHalfSideDiameter(node.right) +1
  diameter = Math.max(left, right)
  return diameter
}

let dfs = (node, max) =>　{
  if(node ===null) return max
  let diameter = 0
  if(node.left) diameter += calHalfSideDiameter(node.left) + 1
  if(node.right) diameter += calHalfSideDiameter(node.right) + 1

  max  = Math.max(max, diameter)

  return Math.max(dfs(node.left, max), dfs(node.right, max))
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
// time: O(n), space: O()
var findTarget = function(root, k) {
  return dfs(root, [], k)
};

let dfs = (node, nArr, target) => {
  if(node === null) return false
  if (nArr.indexOf(target - node.val ) !== -1) return true
  nArr.push(node.val)
  return dfs(node.left, nArr, target) || dfs(node.right, nArr, target) 
}
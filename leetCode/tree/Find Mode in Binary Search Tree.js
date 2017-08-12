/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
  let hashMap = {}, max = 1, result = []
  let dfs = node => {
    if (node) {
      if (hashMap[node.val]) {
        hashMap[node.val] += 1
        if (hashMap[node.val] > max) max = hashMap[node.val]
      }
      else hashMap[node.val] = 1
      dfs(node.left)
      dfs(node.right)
    }
  }
  dfs(root)
  Object.keys(hashMap).forEach(key => {
    if (hashMap[key] === max) result.push(+key)
  })
  return result
};
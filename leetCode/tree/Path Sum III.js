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
 * @return {number}
 */

let pathSum = (root, sum) => {
  if(root) {
    return pathAdd(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)
  } else return 0
}

var pathAdd = function (root, sum) {
  if (root === null) return 0
  if (sum === root.val) return 1 + pathAdd(root.left, sum - root.val) + pathAdd(root.right, sum - root.val)
  return pathAdd(root.left, sum - root.val) + pathAdd(root.right, sum - root.val)
};
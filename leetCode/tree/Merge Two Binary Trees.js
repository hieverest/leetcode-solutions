/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
  let t3 = new TreeNode(null)
  if (t1 && t2) {
    t3.val = t1.val + t2.val
    t3.left = mergeTrees(t1.left, t2.left)
    t3.right = mergeTrees(t1.right, t2.right)
  } else if (t1) {
    t3.val = t1.val
    t3.left = mergeTrees(t1.left)
    t3.right = mergeTrees(t1.right)
  } else if (t2) {
    t3.val = t2.val
    t3.left = mergeTrees(t2.left)
    t3.right = mergeTrees(t2.right)
  } else return null
  return t3
};


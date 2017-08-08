/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

 // Since this is a BST, we can do a reverse inorder traversal to traverse the nodes of the tree in descending order. In the process, we keep track of the running sum of all nodes which we have traversed thus far.
var convertBST = function (root) {
  let sum = 0;
  var convert = function (cur) {
    if (cur == null) return;
    convert(cur.right);
    cur.val += sum;
    sum = cur.val;
    convert(cur.left);
  }
  convert(root);
  return root;
}
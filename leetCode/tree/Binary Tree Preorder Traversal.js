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
var preorderTraversal = function(root) {
    if (root === null) {
        return [];
    } 
    let res = [root.val];
    let left = preorderTraversal(root.left);
    let right = preorderTraversal(root.right);
    return [...res, ...left, ...right];
};
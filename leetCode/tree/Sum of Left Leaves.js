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
var sumOfLeftLeaves = function(root) {
  let sum = 0
  addLeftLeaf(root.left, sum, 'left' )
  addLeftLeaf(root.right, sum, 'right')
  return sum
};

let addLeftLeaf = (node, sum, side) => {
  if(node) {
    if(!node.left && !node.right && side === 'left') {
      sum += node.val
    }
    addLeftLeaf(node.left, sum, 'left')
    addLeftLeaf(node.right, sum, 'right')
  }
}



var sumOfLeftLeaves = function(root) {
    if (root == null) return 0;
    
    var sum = 0;
    if (root.left !== null) {
        if (root.left.left === null && root.left.right === null) sum += root.left.val;
        else sum += sumOfLeftLeaves(root.left);
    }
    sum += sumOfLeftLeaves(root.right);
    
    return sum;    
};
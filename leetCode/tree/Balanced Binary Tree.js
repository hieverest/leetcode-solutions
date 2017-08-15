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
var isBalanced = function (root) {
  if (root === null) {
    return 0;
  }

  let stackToProcess = [root];
  let currentLevel = 0, nodesThisLevel = 1;
  while (stackToProcess.length > 0) {
    let temp = stackToProcess.shift();
    nodesThisLevel--;

    if (temp.left || temp.right) {
      if (temp.left) {
        stackToProcess.push(temp.left);
      }

      if (temp.right) {
        stackToProcess.push(temp.right);
      }
    } else {
      return currentLevel;
    }

    if (nodesThisLevel === 0) {
      if (stackToProcess.length > 0) {
        currentLevel++;
        nodesThisLevel = stackToProcess.length;
        if(nodesThisLevel !== Math.pow(2, currentLevel)) return false
      }
    }
  }

  return true;
};
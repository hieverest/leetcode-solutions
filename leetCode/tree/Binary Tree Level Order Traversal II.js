/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (root === null) {
    return true;
  }

  let stackToProcess = [root], res = [[root.val]], cur = []
  let currentLevel = 1, nodesThisLevel = 1;
  while (stackToProcess.length > 0) {
    let temp = stackToProcess.shift();
    nodesThisLevel--;


    if (temp.left) {
      stackToProcess.push(temp.left);
      cur.push(temp.left)
    }

    if (temp.right) {
      stackToProcess.push(temp.right);
      cur.push(temp.right)
    }
  }

  if (nodesThisLevel === 0) {
    res.push(cur)
    cur = []
    if (stackToProcess.length > 0) {
      currentLevel++;
      nodesThisLevel = stackToProcess.length;
    }
  }


  return res.reverse()
};
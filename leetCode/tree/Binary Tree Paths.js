/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
let drawPath = (node, path, paths) => {
  if (node) {
    if (!node.left && !node.right) {
      path += `${node.val}`
      paths.push(path)
    } else {
      path += `${node.val}->`
      drawPath(node.left, path, paths)
      drawPath(node.right, path, paths)
    }
  }
}
var binaryTreePaths = function (root) {
  let paths = [], path = ''

  drawPath(root, path, paths)
  return paths
};
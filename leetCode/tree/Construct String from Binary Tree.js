/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */

var tree2str = function (t) {
  let str = ''

  let toStr = node => {
    if (node) {
      str += `(${node.val}`
      if (node.left) toStr(node.left)
      if (!node.left && node.right) {
        str += '()'
        toStr(node.right)
      }
      if (node.left && node.right) {
        toStr(node.right)
      }
      str += ')'
    }
  }
  toStr(t)
  return str.slice(1, str.length - 1) // erase the parentheses out of root node
};


// First Java Solution in Discuss. Very clever
let tree2str = t => {
  if (t == null) return "";

  let result = t.val + "";

  let left = tree2str(t.left);
  let right = tree2str(t.right);

  if (left === "" && right === "") return result;
  if (left === "") return result + "()" + "(" + right + ")";
  if (right === "") return result + "(" + left + ")";
  return result + "(" + left + ")" + "(" + right + ")";
}

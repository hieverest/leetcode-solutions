/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  return dfs(p, q)
};

let dfs = (p, q) => {
  if(p && q) {
    if(p.val === q.vall) {
      if(p.left && q.left) return true
        else return false
      if(p.right && q.right) return true
        else return false
      if(!p.right && !q.right) return true
    }
      else return false
    
  } else return false
}
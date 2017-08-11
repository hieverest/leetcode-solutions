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

// fastest solution on LeetCode
// BFS, 并且在一个循环里判断level
var averageOfLevels = function(root) {
    var queue = [root];
    var result = [];
    
    while (queue.length !== 0) {
        var size = queue.length;
        var index = 0;
        var sum = 0;
        
        while (index++ !== size) {
            var node = queue.shift();
            
            sum += node.val;
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(sum / size);
    }
    
    return result;
};

// my solution
let averageOfLevels = (root) => {
  let cacheArr = [], point = 0, result = [], sameLevel = [], level = 0
  root['level'] = 0
  cacheArr.push(root);
  while (point < cacheArr.length) {
    let node = cacheArr[point++]
    if (node.left) {
      node.left['level'] = node.level + 1
      cacheArr.push(node.left);
    }
    if (node.right) {
      node.right['level'] = node.level + 1
      cacheArr.push(node.right);
    }
  }
  cacheArr.forEach(ele => {
    if (ele.level === level) {
      sameLevel.push(ele.val)
    } else {
      level++
      result.push(sameLevel.reduce((acc, cur) => acc + cur, 0) / sameLevel.length)
      sameLevel = [ele.val]
    }
  })
  result.push(sameLevel.reduce((acc, cur) => acc + cur, 0) / sameLevel.length)
  
  return result
}
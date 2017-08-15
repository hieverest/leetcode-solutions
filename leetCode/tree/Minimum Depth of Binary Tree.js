/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     val = val;
 *     left = right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// time: O(n)
// 用两个变量来判断level, 优过我每个Node中存放level信息
var minDepth = function(root) {
    if(root === null){ 
        return true; 
    }
    
    let stackToProcess = [root]; 
    let currentLevel = 1, nodesThisLevel = 1; 
    while(stackToProcess.length > 0){ 
        let temp = stackToProcess.shift(); 
        nodesThisLevel--; 
        
        if(temp.left || temp.right){ 
        if(temp.left){ 
            stackToProcess.push(temp.left); 
        }
        
         if(temp.right){ 
            stackToProcess.push(temp.right); 
        }
        } else { 
            return currentLevel; 
        }
        
        if(nodesThisLevel === 0){
            if(stackToProcess.length > 0){ 
            currentLevel++; 
            nodesThisLevel = stackToProcess.length;
            }
        }
    }
    
    return currentLevel; 
};

// my solution. I save level info in every node
var minDepth = function (root) {
  if (root) {
    let queue = []
    root.level = 1
    queue.push(root);
    while (queue.length) {
      let node = queue.shift();
      if(node.left === null && node.right === null) return node.level
      if (node.left) {
        node.left.level = node.level + 1
        queue.push(node.left);
      }
      if (node.right) {
        node.right.level = node.level + 1
        queue.push(node.right);
      }
    }
  } else return 0
};


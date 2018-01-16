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
// Iteration
var minDepth = function (root) {
    if (root === null) return 0;
    let queue = [root];
    let lvl = 0;
    while (queue.length !== 0) {
        let size = queue.length;
        lvl++;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            if (!node.left && !node.right) return lvl;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
};

// Recursion
var minDepth = function (root) {
    if (root === null) return 0;
    return findLevels(root);
    
};

function findLevels(root) {
    if (root === null) return Infinity;
    if (root.left === null && root.right === null) return 1;
    let left = findLevels(root.left);
    let right = findLevels(root.right);
    return Math.min(left, right) + 1;
}

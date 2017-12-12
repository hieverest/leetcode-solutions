const {
    TreeNode,
    BTree
} = require('./binaryTree.js');


const getWidth = root => {
    if (root === null) return 0;
    let queue = [root];
    let width = 1;
    while (queue.length !== 0) {
        let size = queue.length;
        width = Math.max(size, width);
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return width;
}

let test = new BTree([1, 2, 3, 4, 5, null, 7]);



console.log(getWidth(test.root));

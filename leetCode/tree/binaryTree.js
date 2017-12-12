
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BTree {
  constructor(arr) {
    if (arr.length === 0) this.root = null
    else {
      this.root = new TreeNode(arr[0])
      let idx = 1, node, queue = [this.root]
      while (idx < arr.length) {
        node = queue.shift()
        if (arr[idx] === null) {
          node.left = null
        } else {
          node.left = new TreeNode(arr[idx])
          queue.push(node.left)
        }
        idx++
        if (idx >= arr.length) break
        else if (arr[idx] === null) {
          node.right = null
        } else {
          node.right = new TreeNode(arr[idx])
          queue.push(node.right)
        }
        idx++
      }
    }
    // this.inOrder = inOrder;
  }

  insert(val) {
    let n = new TreeNode(val, null, null);
    if (this.root === null) {
      this.root = n;
    }
    else {
      let current = this.root;
      while (true) {
        if (val < current.val) {
          if (current.left === null) {
            current.left = n;
            break;
          }
          current = current.left;
        }
        else {
          if (current.right === null) {
            current.right = n;
            break;
          }
          current = current.right;
        }
      }
    }

  }

  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.val + " ");
      this.inOrder(node.right);
    }
  }

  preOrder(node) {
    if (node !== null) {
      console.log(node.show() + " ");
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  postOrder(node) {
    if (!(node == null)) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.show() + " ");
    }
  }

  getMin() {
    let current = this.root;
    while (!(current.left == null)) {
      current = current.left;
    }
    return current.val;
  }

  getMax() {
    let current = this.root;
    while (!(current.right == null)) {
      current = current.right;
    }
    return current.val;
  }

  search(num) {
    let current = this.root
    while (current !== null) {
      if (current.val === num) return current
      else if (current.val < num) current = current.right
      else if (current.val > num) current = current.left
    }
    return null
  }
  // 书上的写法below
  // find(val) {
  //   let current = this.root;
  //   while (current.val != val) {
  //     if (val < current.val) {
  //       current = current.left;
  //     }
  //     else {
  //       current = current.right;
  //     }
  //     if (current == null) {
  //       return null;
  //     }
  //   }
  //   return current;
  // }

  remove(value) {
    this.root = this._removeInner(value, this.root);
  }

  _removeInner(val, node) {
    if (node) {
      if (val < node.val) {
        node.left = this._removeInner(val, node.left);
      } else if (val > node.val) {
        node.right = this._removeInner(val, node.right);
      } else if (node.left && node.right) {
        node.val = this.findMinval(node.right);
        node.right = this._removeInner(node.val, node.right);
      } else {
        node = node.left || node.right;
      }
    }
    return node;
  }

  findMinValue(node) {
    let current = node;
    while (!(current.left == null)) {
      current = current.left;
    }
    return current.val;
  }

  traverseBFS() {
    this.queue = [];
    this.queue.push(this.root);
    while (this.queue.length) {
      var node = this.queue.shift();
      console.log(node.val);
      if (node.left) {
        this.queue.push(node.left);
      }
      if (node.right) {
        this.queue.push(node.right);
      }
    }
  }

}

module.exports = {
  TreeNode,
  BTree
}

// ======== extra functions below ==========
// let minDepth = 0
// const minDepth = function (node) {
//   if (node === null && ) 
// };
let sumOfTree = (node) => {
  if (node === null) {
    return 0
  } else if (node.left || node.right) {
    let sum = node.val + sumOfTree(node.left) + sumOfTree(node.right);
    return sum
  } else {
    return node.val
  }
}

let _getHeight = function (node) {
  if (!node) {
    return 0;
  }
  var left = _getHeight(node.left);
  var right = _getHeight(node.right);
  return Math.max(left, right) + 1;
};

let getHeight = function (node) {
  if (!node) {
    node = root;
  }
  return _getHeight(node);
};

var minDepth = function (root) {
  if (root === null) return true;
  if (!root.left || !root.right) return 1


  let stackToProcess = [root];
  let currentLevel = 1, nodesThisLevel = 1;
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
      }
    }
  }

  return currentLevel;
};


var isBalanced = function (root) {
  let maxHeight = getHeight(root), minHeight = minDepth(root)
  if (maxHeight - minHeight < 2) return true
  else return false
};



var diameterOfBinaryTree = function(root) {
  return dfs(root, 0)
};

let calHalfSideDiameter = node => {
  if(node === null) return 0
  let diameter = 0, left = 0, right = 0
  if(node.left) left = calHalfSideDiameter(node.left) +1
  if(node.right) right = calHalfSideDiameter(node.right) +1
  diameter = Math.max(left, right)
  return diameter
}

let dfs = (node, max) =>　{
  if(node ===null) return max
  let diameter = 0
  if(node.left) diameter += calHalfSideDiameter(node.left) + 1
  if(node.right) diameter += calHalfSideDiameter(node.right) + 1

  max  = Math.max(max, diameter)

  return Math.max(dfs(node.left, max), dfs(node.right, max))
}

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class binTree {
  constructor() {
    this.root = null;
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

let btree = new binTree()
btree.insert(6)
btree.insert(3)
btree.insert(10)








let sum = 0;

var convertBST = function (root) {
  convert(root);
  return root;
}

var convert = function(cur) {
  if (cur == null) return;
  convert(cur.right);
  cur.val += sum;
  sum = cur.val;
  convert(cur.left);
}

console.log(convertBST(btree.root))
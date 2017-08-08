class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  show() {
    return this.data;
  }

}

class BST {
  constructor() {
    this.root = null;
    // this.inOrder = inOrder;
  }

  insert(data) {
    let n = new Node(data, null, null);
    if (this.root === null) {
      this.root = n;
    }
    else {
      let current = this.root;
      while (true) {
        if (data < current.data) {
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
      console.log(node.show() + " ");
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
    return current.data;
  }

  getMax() {
    let current = this.root;
    while (!(current.right == null)) {
      current = current.right;
    }
    return current.data;
  }

  search(num) {
    let current = this.root
    while (current !== null) {
      if (current.data === num) return current
      else if (current.data < num) current = current.right
      else if (current.data > num) current = current.left
    }
    return null
  }
  // 书上的写法below
  // find(data) {
  //   let current = this.root;
  //   while (current.data != data) {
  //     if (data < current.data) {
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

  _removeInner(data, node) {
    if (node) {
      if (data < node.data) {
        node.left = this._removeInner(data, node.left);
      } else if (data > node.data) {
        node.right = this._removeInner(data, node.right);
      } else if (node.left && node.right) {
        node.data = this.findMindata(node.right);
        node.right = this._removeInner(node.data, node.right);
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
    return current.data;
  }
}

function isBST(node) {
  if (!node) {
    return true;
  }

  if (node.left != null && node.left.value > node.value) {
    return false;
  }

  if (node.right != null && node.right.value < node.value) {
    return false;
  }

  if (!isBST(node.left) || !isBST(node.right)) {
    return false;
  }

  return true;
}

// height of a tree
function height(node) {
  if (!node) return 0;
  var leftHeight = height(node.left);
  var rightHeight = height(node.right);

  return Math.max(leftHeight, rightHeight) + 1;
}


function bfs(node) {
  if (!node) return 'empty tree'
  let queue = [], i = 0
  traverse(node)

}

function traverse(node, queue=[], i=0) {
    if (node) queue.push(node)
    if (i >= queue.length) return
    console.log(node.data);
    i++
    if(node.left) traverse(node.left)
    if(node.right) traverse(node.right)
  }


// let testBstst = new BST()
// testBst.insert(23);
// testBst.insert(45);
// testBst.insert(16);
// testBst.insert(37);
// testBst.insert(3);
// testBst.insert(99);
// testBst.insert(22);
// // console.log(isBST(testBst.root));

// testBst.remove(3)
// console.log(testBst.root);
// testBst.inOrder(testBst.root)

// Inorder traversal:
// 3 16 22 23 37 45 99
// Preorder traversal:
// 23 16 3 22 45 37 99
// Postorder traversal:
// 3 22 16 37 99 45 23

// console.log(testBst.root);

let anotBst = new BST()
anotBst.insert(7)
anotBst.insert(3)
anotBst.insert(10)
anotBst.insert(2)
anotBst.insert(5)
anotBst.insert(8)
//     7
//   3   10
//  2 5 8   


// anotBst.inOrder(anotBst.root)
// anotBst.preOrder(anotBst.root)
// anotBst.postOrder(anotBst.root)
bfs(anotBst.root)
// console.log(anotBst.root);
// console.log(anotBst.search(7))

// let secBst = new BST()
// secBst.insert(1)
// secBst.insert(3)
// secBst.insert(2)
// secBst.insert(5)
// console.log(secBst.root);

var mergeTrees = function (t1, t2) {
  let t3 = new Node(null, null, null)
  if (t1 && t2) {
    t3.data = t1.data + t2.data
    t3.left = mergeTrees(t1.left, t2.left)
    t3.right = mergeTrees(t1.right, t2.right)
  } else if (t1) {
    t3.data = t1.data
    t3.left = mergeTrees(t1.left)
    t3.right = mergeTrees(t1.right)
  } else if (t2) {
    t3.data = t2.data
    t3.left = mergeTrees(t2.left)
    t3.right = mergeTrees(t2.right)
  } else return null
  return t3
};

// console.log(mergeTrees(anotBst.root, secBst.root));

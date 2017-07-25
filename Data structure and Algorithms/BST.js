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

}



let testBst = new BST()
testBst.insert(23);
testBst.insert(45);
testBst.insert(16);
testBst.insert(37);
testBst.insert(3);
testBst.insert(99);
testBst.insert(22);
testBst.preOrder(testBst.root)
console.log(testBst.getMin());
console.log(testBst.getMax());
console.log(testBst.search(37));
// Inorder traversal:
// 3 16 22 23 37 45 99
// Preorder traversal:
// 23 16 3 22 45 37 99
// Postorder traversal:
// 3 22 16 37 99 45 23

// console.log(testBst.root);


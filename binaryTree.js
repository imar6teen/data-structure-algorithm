class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTreeBFS {
  constructor() {
    this.root = null;
  }
  //Breadth First Search Method
  add(data) {
    let node = new Node(data);
    if (!this.root) return (this.root = node);
    let tmpqueue = [this.root];
    while (true) {
      let tmp = tmpqueue.shift();
      if (!tmp.left) {
        return (tmp.left = node);
      }
      tmpqueue.push(tmp.left);
      if (!tmp.right) {
        return (tmp.right = node);
      }
      tmpqueue.push(tmp.right);
    }
  }
  delete(data) {
    function deleteDeepest(root, delNode) {
      let tmpqueue = [root];
      while (true) {
        let tmp = tmpqueue.shift();
        if (tmp === delNode) {
          tmp = null;
          return;
        }
        if (tmp.left != null) {
          if (tmp.left === delNode) {
            tmp.left = null;
            return;
          } else tmpqueue.push(tmp.left);
        }
        if (tmp.right != null) {
          if (tmp.right === delNode) {
            tmp.right = null;
            return;
          } else tmpqueue.push(tmp.right);
        }
      }
    }
    let tmpqueue = [this.root];
    let target = null;
    while (true) {
      let tmp = tmpqueue.shift();
      if (tmp.data === data) {
        target = tmp;
      }
      if (tmp.left) {
        tmpqueue.push(tmp.left);
      }
      if (tmp.right) tmpqueue.push(tmp.right);
      if (tmpqueue.length === 0) {
        let x = tmp.data;
        deleteDeepest(this.root, tmp);
        target.data = x;
        return;
      }
    }
  }
  //left root right
  inorder() {
    let result = [];
    function order(root) {
      if (!root) return null;
      if (root.left) order(root.left);
      result.push(root.data);
      if (root.right) order(root.right);
      return;
    }
    order(this.root);
    if (result[0] === undefined) return "Tidak terdapat nilai";
    return result;
  }
  //root left right
  preorder() {
    let result = [];
    function order(root) {
      if (!root) return null;
      result.push(root.data);
      if (root.left) order(root.left);
      if (root.right) order(root.right);
      return;
    }
    order(this.root);
    if (result[0] === undefined) return "Tidak terdapat nilai";
    return result;
  }
  //left right root
  postorder() {
    let result = [];
    function order(root) {
      if (!root) return null;
      if (root.left) order(root.left);
      if (root.right) order(root.right);
      result.push(root.data);
    }
    order(this.root);
    if (result[0] === undefined) return "Tidak terdapat nilai";
    return result;
  }
}

let binaryTreeBFS = new BinaryTreeBFS();

for (let i = 1; i <= 7; i++) {
  binaryTreeBFS.add(i);
}

binaryTreeBFS.delete(3);

console.log(binaryTreeBFS.root);
// console.log(binaryTreeBFS.inorder());

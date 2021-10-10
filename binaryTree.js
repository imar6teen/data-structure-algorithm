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
  deleteDeepest(root, delNode) {
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
  delete(data) {
    console.time("tes");
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
        this.deleteDeepest(this.root, tmp);
        target.data = x;
        console.timeEnd("tes");
        return;
      }
    }
  }
}

let binaryTreeBFS = new BinaryTreeBFS();

for (let i = 1; i <= 7; i++) {
  binaryTreeBFS.add(i);
}

binaryTreeBFS.delete(1);
binaryTreeBFS.delete(2);
console.log(binaryTreeBFS);

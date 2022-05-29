class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  #insertBFS(node, queue) {
    const root = queue.shift();
    if (root.left) queue.push(root.left);
    else {
      root.left = node;
      return;
    }
    if (root.right) queue.push(root.right);
    else {
      root.right = node;
      return;
    }
    this.#insertBFS(node, queue);
  }

  insert(value) {
    const node = new Node(value);
    this.size++;
    if (!this.root) this.root = node;
    else {
      const queue = [];
      if (this.root.left) queue.push(this.root.left);
      else {
        this.root.left = node;
        return;
      }
      if (this.root.right) queue.push(this.root.right);
      else {
        this.root.right = node;
        return;
      }
      return this.#insertBFS(node, queue);
    }
  }

  #inorder(arr, root) {
    if (root.left !== null) this.#inorder(arr, root.left);
    arr.push(root.value);
    if (root.right !== null) this.#inorder(arr, root.right);
    return;
  }

  #arrToBST(arr, root) {
    if (root.left) this.#arrToBST(arr, root.left);
    root.value = arr.shift();
    if (root.right) this.#arrToBST(arr, root.right);
    return;
  }

  binTreeToBinSearchTree() {
    const tempArr = [];
    this.#inorder(tempArr, this.root);
    tempArr.sort((a, b) => a - b);
    this.#arrToBST(tempArr, this.root);
  }
}

const bt = new BinaryTree();

bt.insert(3);
bt.insert(7);
bt.insert(12);
bt.insert(5);
bt.insert(2);
bt.insert(8);
bt.insert(1);

console.log(bt.root);

bt.binTreeToBinSearchTree();

console.log(bt.root);

console.log(bt.size);

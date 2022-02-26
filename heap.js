class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class MaxHeap {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  insert(data) {
    this.size++;
    let node = new Node(data);
    if (!this.root) {
      this.root = node;
      return;
    }
    let current = this.root;
    let adjustHeap = [];
    let tmp = [];
    while (current) {
      if (data > current.data) {
        adjustHeap.push(current);
      }
      if (current.left) tmp.push(current.left);
      else {
        current.left = node;
        adjustHeap.push(current.left);
        break;
      }
      if (current.right) tmp.push(current.right);
      else {
        current.right = node;
        adjustHeap.push(current.right);
        break;
      }
      current = tmp.shift();
    }
    let child = adjustHeap.pop();
    while (true) {
      if (adjustHeap.length === 0) break;
      let parent = adjustHeap.pop();
      if (child.data > parent.data) {
        let tmp = parent.data;
        parent.data = child.data;
        child.data = tmp;
        child = parent;
      }
    }
  }

  delete() {
    let current = this.root;
    let tmp = [];
    let replaceNode = this.root;
    while (true) {
      if (tmp.length === 0 && current.left === null && current.right === null) {
        replaceNode.data = current.data;
        break;
      }
      if (current.left) tmp.push(current.left);
      if (current.right) tmp.push(current.right);
      current = tmp.shift();
    }
    current = this.root;
    while (true) {
      current;
      let child;
      let parent = current;
      if (current.right !== null) {
        if (current.left.data >= current.right.data) {
          child = current.left;
          current = current.left;
        } else {
          child = current.right;
          current = current.right;
        }
      } else if (current.left !== null) {
        child = current.left;
        current = current.left;
      } else break;
      if (child.data >= parent.data) {
        let tmp = child.data;
        child.data = parent.data;
        parent.data = tmp;
      }
    }
    this.size--;
  }
}

function main() {
  let heap = new MaxHeap();
  heap.insert(80);
  heap.insert(60);
  heap.insert(40);
  heap.insert(100);
  //   heap.insert(200);
  heap.delete();
  console.log(heap);
}

main();

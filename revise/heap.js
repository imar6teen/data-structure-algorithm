class MaxHeap {
  constructor() {
    this.size = 0;
    this.arrHeap = [];
  }

  insert(n) {
    this.arrHeap.push(n);
    this.size++;

    let parentLastIndex = this.getParent(this.size - 1);

    // take parentIndex, and heapify it
    while (parentLastIndex >= 0) {
      this.maxHeapify(parentLastIndex);
      parentLastIndex = this.getParent(parentLastIndex);
    }
  }

  maxHeapify(i) {
    let largest = i;
    let leftChild = this.getLeftChild(i);
    let rightChild = this.getRightChild(i);
    if (
      leftChild < this.size &&
      this.arrHeap[leftChild] > this.arrHeap[largest]
    )
      largest = leftChild;
    if (
      rightChild < this.size &&
      this.arrHeap[rightChild] > this.arrHeap[largest]
    )
      largest = rightChild;
    if (largest != i) {
      this.swap(i, largest);
      this.maxHeapify(largest);
    }
  }

  buildMaxHeap() {
    for (let i = Math.floor(this.size / 2); i >= 0; i--) {
      this.maxHeapify(i);
    }
  }

  getParent(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChild(i) {
    return Math.floor(2 * i + 1);
  }

  getRightChild(i) {
    return Math.floor(2 * i + 2);
  }

  swap(i, j) {
    [this.arrHeap[i], this.arrHeap[j]] = [this.arrHeap[j], this.arrHeap[i]];
  }
}

const maxHeap = new MaxHeap();

// for (let i = 0; i < 20; i++) {
//   const randomNumber = Math.floor(Math.random() * i);
//   maxHeap.insert(randomNumber);
// }

maxHeap.insert(1);
maxHeap.insert(5);
maxHeap.insert(9);
maxHeap.insert(3);
maxHeap.insert(8);
maxHeap.insert(4);
maxHeap.insert(4);
maxHeap.insert(2);

// maxHeap.buildMaxHeap();

console.log(maxHeap.arrHeap);

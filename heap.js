class MaxHeap {
  constructor() {
    this.arrHeap = [];
    this.size = 0;
  }

  //heapify is process for comparing value between non leaf node with leaf nodes and go to the bottom

  insert(value) {
    this.arrHeap.push(value);
    this.size++;

    //parent index of the last node
    let parentLastIndex = this.getParent(this.size - 1);

    // take parentIndex, and heapify it
    while (parentLastIndex >= 0) {
      this.maxHeapify(parentLastIndex);
      parentLastIndex = this.getParent(parentLastIndex);
    }
  }

  maxHeapify(i) {
    let l = this.getLeftChild(i);
    let r = this.getRightChild(i);
    let largest = i;
    if (l < this.size && this.arrHeap[l] > this.arrHeap[largest]) {
      largest = l;
    }
    if (r < this.size && this.arrHeap[r] > this.arrHeap[largest]) {
      largest = r;
    }
    if (largest != i) {
      this.swap(i, largest);
      this.maxHeapify(largest);
    }
  }

  //heapify all of the array, create a max heap
  buildMaxHeap() {
    // Math.floor(this.size / 2) is the last parent node (non-leaf)
    for (let i = Math.floor(this.size / 2); i >= 0; i--) {
      this.maxHeapify(i);
    }
  }

  swap(i, j) {
    let temp = this.arrHeap[i];
    this.arrHeap[i] = this.arrHeap[j];
    this.arrHeap[j] = temp;
  }

  getParent(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChild(i) {
    return 2 * i + 1;
  }

  getRightChild(i) {
    return 2 * i + 2;
  }

  delete(value) {
    let heapifyIndex = 0;
    //locate value wants to delete
    for (let i = 0; i < this.size; i++) {
      if (this.arrHeap[i] === value) {
        //swap it with the last node
        this.swap(i, this.size - 1);
        //delete the last node
        this.arrHeap.splice(this.size - 1, 1);
        this.size--;
        heapifyIndex = i;
        break;
      }
    }
    //heapify it from the swapped index
    this.maxHeapify(heapifyIndex);
  }

  //remove root of the heap
  extractMax() {
    this.swap(0, this.size - 1);
    this.arrHeap.splice(this.size - 1, 1);
    this.size--;
    this.maxHeapify(0);
  }
}

const maxHeap = new MaxHeap();

maxHeap.insert(2);
maxHeap.insert(5);
maxHeap.insert(7);
maxHeap.insert(10);
maxHeap.insert(1);
maxHeap.insert(3);
maxHeap.insert(4);
maxHeap.insert(2);
maxHeap.insert(8);

maxHeap.delete(5);

console.log(maxHeap.arrHeap);

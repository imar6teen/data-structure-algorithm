class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  add(num) {
    const node = new Node(num);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
  //prepend
  unshift(num) {
    const node = new Node(num);
    node.next = this.head;
    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }
  }
  //contain
  search(num) {
    if (!this.head) return false;
    let current = this.head;
    while (current && current.data != num) {
      current = current.next;
    }
    if (!current) return false;
    return true;
  }
  remove(num) {
    if (!this.head) {
      console.log("No Data in Sll");
      return false;
    }
    let current = this.head;
    let prev = null;
    if (current.data == num) {
      this.head = this.head.next;
      return true;
    }
    while (current.data != num) {
      prev = current;
      current = current.next;
    }
    prev.next = current.next;
    return true;
  }
}

const sll = new SingleLinkedList();

sll.add(1);
sll.add(2);
sll.unshift(0);
sll.remove(1);

console.log(sll.head);

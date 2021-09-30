class Node {
  constructor({ data }) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(num) {
    let node = new Node({ data: num });
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail; //menggunakan tail karena jika menggunakan head, harus looping ke null dulu, kalau tail kan sudah paling akhir :)
      this.tail.next = node;
      this.tail = node;
    }
  }

  unshift(num) {
    let node = new Node({ data: num });
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
  }
  sort(num) {
    let node = new Node({ data: num });
    let current = this.head;
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    while (true) {
      if (current.data <= num && current.next == null) {
        node.prev = current;
        current.next = node;
        return this.head;
      } else if (current.data <= num && current.next.data > num) {
        current.next.prev = node;
        let temp = current.next;
        node.next = temp;
        node.prev = current;
        current.next = node;
        return this.head;
      } else if (current.data >= num) {
        current.prev = node;
        node.next = current;
        current = node;
        this.head = current;
        return this.head;
      }
      current = current.next;
    }
  }
}

let dll = new DoubleLinkedList();

dll.sort(2);
dll.sort(4);
dll.sort(3);
dll.sort(1);
dll.sort(5);

console.log(dll.head.next.next);

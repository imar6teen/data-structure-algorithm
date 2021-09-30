class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}

function addDoublyLinkedList(ll, data) {
  const node = new Node(data);
  if (!ll.head) {
    ll.head = node;
    ll.tail = node;
  } else {
    node.prev = ll.tail;
    ll.tail.next = node;
    ll.tail = node;
  }

  ll.size++;
}

function unshiftDoublyLinkedList(ll, data) {
  const node = new Node(data);
  if (!ll.head) {
    ll.head = node;
    ll.tail = node;
  } else {
    node.next = ll.head;
    ll.head.prev = node;
    ll.head = node;
  }
  ll.size++;
}

const doublyLinkedList = new DoublyLinkedList();
addDoublyLinkedList(doublyLinkedList, 3);
addDoublyLinkedList(doublyLinkedList, 5);
addDoublyLinkedList(doublyLinkedList, 8);
unshiftDoublyLinkedList(doublyLinkedList, 1);
console.log(doublyLinkedList.tail.prev.prev.prev);

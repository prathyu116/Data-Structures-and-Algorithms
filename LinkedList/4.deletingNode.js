


https://replit.com/@PrathyuPrasad/ElementaryImportantTexts#del.js


const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function deleteNode(head, position) {
       let cur = head;
    var index = 0;
    let prev = null;
    while (cur != null) {
      if (index == position) {
        if (prev == null) {
          head = cur.next;
        } else {
          prev.next = cur.next;
        }
      }
      index++
      prev = cur;
      cur = cur.next;
    }
  return head;
   
}





















----------------------------------------------------------------------


class Node {
  constructor(item) {
    this.data = item;
    this.next = null;
  }
}
class Linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(item) {
    var node = new Node(item); //1.create node
    if (this.head == null) {
      //
      this.head = node;
    } else {
      let cur = this.head;
      while (cur.next != null) {
        cur = cur.next;
      }
      cur.next = node;
    }
    this.size++; 
  }
  delete(item) {
    let cur = this.head;
    var index = 0;
    let prev = null;
    while (cur != null) {
      if (cur.data == item) {
        if (prev == null) {
          this.head = cur.next;
        } else {
          prev.next = cur.next;
        }
      }
      prev = cur;
      cur = cur.next;
    }
  }

  printList() {
    let cur = this.head;
    var index = 0;
    while (cur != null) {
      console.log("data:", cur.data, "index", index++);
      cur = cur.next;
    }
  }
}

var list = new Linkedlist();
list.add(2);
list.add(3);
list.add(5);
list.add(6);
list.add(10);
list.delete(11);
list.printList();

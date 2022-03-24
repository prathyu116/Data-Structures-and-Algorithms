//https://replit.com/@PrathyuPrasad/ElementaryImportantTexts#anypos.js
const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};


function insertNodeAtPosition(head, data, position) {
  let node = new LinkedListNode(data);
  if (head === null) {
    return node;
  }
  let current = head;
  if (position === 0) {
    node.next = current;
    return node;
  }
  let i = 0;
  let prev = null;
  while (i < position) {
    prev = current;
    current = current.next;
    i++;
  }
  prev.next = node;
  node.next = current;
  return head;
}


















----------------------------------------------------------------------------




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
  insertAtanyPos(data, position) {
    if(position >= this.size || position <0){
      console.log("invalid")
      return
    }
    var node = new Node(data);
    let current = this.head;


    if (this.head == null) {
      this.head = node;
    } else if (position === 0) {
      node.next = current;
           this. head=node

    } else {
      let i = 0;
      let prev = null;
      while (i < position) {
        prev = current;
        current = current.next;
        i++;
      }
      prev.next = node;
      node.next = current;
    }
    
  }
    sizeOflist(){
    return this.size
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
list.add(4);
list.insertAtanyPos(100, -1);
list.printList();

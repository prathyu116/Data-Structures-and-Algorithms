//https://replit.com/@PrathyuPrasad/ElementaryImportantTexts#rev.js
/*
=>take 3 pointer prev,curr,next(n)
=>change the node
*/

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
  reverse() {
    let cur = this.head;
    let prev = null
    while(cur != null){
      var n = cur.next
      cur.next=prev
      prev=cur
      cur=n
    }
      this.head=prev
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
// list.printList();
console.log("------------------------")
list.reverse();
list.printList();







---------------------------------------------

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

// Complete the function below

function reverse(head) {
    let prev = null
    let temp = head
    while(temp != null){
       var next=temp.next
        temp.next=prev
        prev=temp
        temp=next
    }
    head=prev
    return head
}



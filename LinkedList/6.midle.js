//https://replit.com/@PrathyuPrasad/ElementaryImportantTexts#midleNode.js
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var middleNode = function(head) {
    if(head == null){
        return null
    }
    var fast = head
    var slow = head
    while(fast !== null && fast.next!==null ){
        slow=slow.next
        fast=fast.next.next
    }
    return slow.data
    
};

--------------------------------------------

delete mdidle
var deleteMiddle = function(head) {
    if (!head || !head.next) return null;
    
    let slow = head;
    let fast = head;
    let lastPointer;
    let len = 0;
    
    while (fast.next) {
        if (len % 2 === 0) {
            lastPointer = slow;
            slow = slow.next;
        }
        fast = fast.next;
        len++;
    }
    
    lastPointer.next = slow.next;
    return head;
};
















----------------------------------

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
  midle() {
    let fast = this.head;
    let slow = this.head
    while(fast !== null && fast.next !== null){
      slow = slow.next
      fast = fast.next.next
 
    }
      return slow.data
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
list.add(20);
list.printList();
console.log("------------------------",list.midle())

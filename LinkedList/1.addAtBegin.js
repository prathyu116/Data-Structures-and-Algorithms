
https://replit.com/@PrathyuPrasad/ElementaryImportantTexts#index.js


const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtHead(head, data) {
    let node = new LinkedListNode(data)
    let temp = head
    if(temp==null){
        return node
    }else{
      node.next=temp
      head=node
    }
    return head
    
    
}



-----------------------------------------------------------
  





class Node {
  constructor(item){
    this.data = item
    this.next = null
  }
}
class Linkedlist {
  constructor(){
    this.head = null
    this.size = 0
  }

  addAtBegining(item){
    var node = new Node(item)
    if(this.head == null){    // 
      this.head=node
    }else{
      node.next=this.head
      this.head=node
    }
     this.size++
  }
  printList(){
    var cur = this.head
    var index = 0
    while(cur != null){ 
      console.log("data:",cur.data,"index",index++)
      cur=cur.next
    }
  }
}

var list = new Linkedlist()

list.addAtBegining(1)
list.addAtBegining(2)
list.printList() 



















const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtTail(head, data) {
    let node = new LinkedListNode(data)
    let temp = head
    if(temp===null){
        return node
    }
    while(temp.next !== null){
        temp=temp.next
    }
    temp.next=node
    return head
}









-------------------------------------------------------------------------

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
  add(item){
    var node = new Node(item) //1.create node
    if(this.head == null){    // 
      this.head=node
    }else{
      let cur = this.head
      while(cur.next != null){
        cur=cur.next
      }
       cur.next=node
    }
    this.size++ //node nte count edkkan
  }

  printList(){
    let cur = this.head
    var index = 0
    while(cur != null){ 
      console.log("data:",cur.data,"index",index++)
      cur=cur.next
    }
  }
}

var list = new Linkedlist()
list.add(2)
list.add(3)
list.add(4)
list.printList() 

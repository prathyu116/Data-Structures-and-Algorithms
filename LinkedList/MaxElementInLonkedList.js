


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
   maxAtlinkeList(){
    var max = -9999999999999999;
     while (this.head != null) {
 
        if (max < this.head.data)
            max = this.head.data;
        this.head = this.head.next;
    }
    return max;
  }
}

var list = new Linkedlist()
list.add(2)
list.add(3)
list.add(4)
list.printList() 
console.log(list.maxAtlinkeList())

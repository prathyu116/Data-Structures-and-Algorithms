//o(n)  o(1)space
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var rotateRight = function(head, k) {
    
    var temp = head
    var count = 0
 
    
    while(temp != null){
        count++
        temp=temp.next
    }

    var i=0
    var cur=head
    var prev=null
    var index=count-(k%count)
    while(i<index){
        prev=cur
        cur=cur.next
        i++
        
    }
    prev.next=null
    var new_head = cur
    while(cur.next != null){
        cur=cur.next
    }
    cur.next=head
    head=new_head
    return head
    

};


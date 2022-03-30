const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

function nth_node(head,n){
 var size=0
 var temp = head
 while(temp.next != null){
     size++
     temp=temp.next
 }
 var pos = size-n+1
 var curr = head
 while(pos > 0){
     pos--
     curr=curr.next
 }
 return curr.data

}

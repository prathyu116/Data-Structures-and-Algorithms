const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below

var addTwoNumbers = function (l1, l2) {
 let total=0;
 let sum=0;
 let head=new ListNode(0)
 var cur=head
 var a=l1
 var b=l2
 while(a!==null || b!==null){
     sum=(a?a.val:0)+(b?b.val:0)+total
     total =Math.floor(sum/10)
     cur.next=new  ListNode(sum%10)
     cur=cur.next
     a=a?a.next:null;
     b=b?b.next:null
 }
 if(total){
     cur.next=new ListNode(cur)
 }
 return head.next
};

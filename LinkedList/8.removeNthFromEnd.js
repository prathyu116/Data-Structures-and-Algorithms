 let p1=head;
    let p2=head;

    for(let i=0;i<n;i++){
        p2=p2.next;
    }
		// if kth node is head node then simply move the head.
    if(p2===null){
        head=head.next;
        return head;
    }

    while(p2.next!==null){
        p1=p1.next;
        p2=p2.next;
    }
  
    p1.next=p1.next.next;
    return head;
};

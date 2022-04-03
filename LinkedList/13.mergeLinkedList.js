var mergeTwoLists = function(list1, list2) {    
    const mergedList = new ListNode(0);
    let pMerge = mergedList
    while(list1 !== null || list2 !== null) {
        if(list2 === null || list1 !== null && list1.val <= list2.val) {
            pMerge.next = new ListNode(list1.val);
            list1 = list1.next;
        }  else {
            pMerge.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        
        pMerge = pMerge.next;
    }
    
    return mergedList.next;
};

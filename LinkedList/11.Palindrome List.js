/*

SC & TC-->O(n)
stacking store cheyth 2 pointer vech compare cheyum

*/


const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
var isPalindrome = function (head) {
      if(head === null){
       return true;
    }
    
    let temp = head;
    let stack = [];   //stack sotroing list item
    
    while(temp != null){
        stack.push(temp.data);
        temp = temp.next;
    }
    // console.log(arr)
    
    var start=0,end=stack.length-1
    var s = 0;
    var e = stack.length-1;
    while(s<=e) {
        if(stack[s] != stack[e])
        {
            return false;       
        }
        else{
            s++;
            e--;
        }
    }
    return true;
    
};

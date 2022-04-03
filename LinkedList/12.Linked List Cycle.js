/*

in circular path slow and fast met 

https://leetcode.com/problems/linked-list-cycle/

/** Solution
https://leetcode.com/problems/linked-list-cycle-ii/

 * 1. Create two pointers.
 * 2. Move second pointer twice as fast as compared to first pointer.
 * 3. There may be some point where both pointers meet (If cycle exist in list).
 * 4. From that position move one of the two pointer one by one. Assign the next pointer to head and move that pointer from head one by one as well.
 * 5. The point where they meet now is where the cycle starts.
 */


*/


const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var hasCycle = function(head) {
    
     let fastPointer = head, slowPointer = head
     
     while(fastPointer != null && slowPointer != null && fastPointer.next != null) {
        slowPointer=slowPointer.next
        fastPointer = fastPointer.next.next;
        if(fastPointer === slowPointer) {
            return true;
        }
    }
    return false;
    
};


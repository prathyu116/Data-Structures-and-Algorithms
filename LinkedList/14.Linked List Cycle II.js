/**
like cycle 1 il cheytha polea we take 2 pointer and moove...last positionil fastpointer um slow pointerum kootimuttum...
then take pointer=head and move both slow anf pointer ...they met in one node hence the result

 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
https://leetcode.com/problems/linked-list-cycle-ii/
https://www.youtube.com/watch?v=hZIZorVvn0M&list=PLrClazTqVpJkW4VpUE_2vDQLFIvfQIkZF&index=3
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let fast = head
    let slow = head
    
    let pointer = head
    
    while(fast && fast.next){
        fast=fast.next.next;
        slow=slow.next
        if(fast=== slow) break
        
    }
    if(fast !== slow) return null  //there is no cycle condition
    
    while(pointer !== slow){
        pointer = pointer.next
        slow=slow.next
    }
    return slow
};

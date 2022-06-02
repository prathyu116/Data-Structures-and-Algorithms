/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
first midd kand pidikkum
then reverse cheyyum
function reverse(head) {
    let prev = null
    let temp = head
    while(temp != null){
       var next=temp.next
        temp.next=prev
        prev=temp
        temp=next
    }
    head=prev
    return head
}
var isPalindrome = function(head) {
     let fast = head
     let slow = head
     let start = head
     let length = 0
     while(fast && fast.next){
         fast=fast.next.next
         slow=slow.next
         length++
         
}
    let mid = reverse(slow)
    while(length){
        length--
        if(mid.val !== start.val) return false
        mid=mid.next
        start=start.next
    }
    return true
};

TC O(2n) no extra space

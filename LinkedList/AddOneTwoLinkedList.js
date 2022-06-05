/*Below are the steps : 

Reverse given linked list. For example, 1-> 9-> 9 -> 9 is converted to 9-> 9 -> 9 ->1.
Start traversing linked list from leftmost node and add 1 to it. If there is a carry, move to the next node. Keep moving to the next node while there is a carry.
Reverse modified linked list and return head.
Below is the implementation of above steps.

*/


const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
function reverse(head)
{
    var prev = null;
    var current = head;
    var next;
    while (current != null)
    {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}
 
/* Adds one to a linked lists and return the head
node of resultant list */
function addOneUtil(head)
{
    // res is head node of the resultant list
    var res = head;
    var temp, prev = null;
 
    var carry = 1, sum;
 
    while (head != null) //while both lists exist
    {
        // Calculate value of next digit in resultant list.
        // The next digit is sum of following things
        // (i) Carry
        // (ii) Next digit of head list (if there is a
        // next digit)
        sum = carry + head.data;
 
        // update carry for next calculation
        carry = (sum >= 10)? 1 : 0;
 
        // update sum if it is greater than 10
        sum = sum % 10;
 
        // Create a new node with sum as data
        head.data = sum;
 
        // Move head and second pointers to next nodes
        temp = head;
        head = head.next;
    }
 
    // if some carry is still there, add a new node to
    // result list.
    if (carry > 0)
        temp.next = newNode(carry);
 
    // return head of the resultant list
    return res;
}
 

var addOneToLinkedList = function(head) {
     head = reverse(head);
 
    // Add one from left to right of reversed
    // list
    head = addOneUtil(head);
 
    // Reverse the modified list
    return reverse(head);
};


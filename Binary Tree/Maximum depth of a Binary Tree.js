
/*
https://takeuforward.org/data-structure/maximum-depth-of-a-binary-tree/
we caan use recursive traversal
*/

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
var maxDepth = function(root) {
     if (!root) return 0; 
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};

Time Complexity: O(N) 

Space Complexity: O(1) Extra Space + O(H) Recursion Stack space, where “H”  is the height of the binary tree.

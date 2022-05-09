/*


https://takeuforward.org/data-structure/preorder-traversal-of-binary-tree/
TC o(n) n is number of nodes
SC==o(n)
*/
var preorderTraversal = function(root) {
    let output = [];
    function foo (node) {
        if(!node) return;
        output.push(node.val);
        foo(node.left);
        foo(node.right);
    }
    foo(root);
    return output;
};

-----------------------------itreative
var preorderTraversal = function(node) {
    let stack = [];
    let output = [];
    while (stack.length || node !== null) {
        if (node !== null) {
            output.push(node.val);
            stack.push(node);
            node = node.left;
        } else {
            node = stack.pop().right;
        }
        
    }
    return output;
};

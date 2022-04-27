/*
https://takeuforward.org/data-structure/inorder-traversal-of-binary-tree/
Algorithm Preorder(tree)
   1. Visit the root.
   2. Traverse the left subtree, i.e., call Preorder(left-subtree)
   3. Traverse the right subtree, i.e., call Preorder(right-subtree) 
   
   
*/

// Definition of Binary Tree Node
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// Complete the function below
function inorderTraversal(root){
       let visited = []
        const inner = (root)=>{
            if(!root) return [];
            
            if(root.left) inner(root.left);
            visited.push(root.val);
            if(root.right) inner(root.right)
        }
        inner(root);
    return visited

}
--------------------------------------------
Using Iterations

var inorderTraversal = (root)=>{
    let stack=[];
    let visited = [];
    while(root || stack.length>0){
        while(root){
            stack.push(root);
            root = root.left
        }
        root = stack.pop();
        visited.push(root.val);
        root = root.right;
    }
    return visited
}

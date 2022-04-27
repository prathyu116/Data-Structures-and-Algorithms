/*
https://takeuforward.org/data-structure/post-order-traversal-of-binary-tree/
LEFT-RIGHT-ROOT

*/
  let visited = []
        const inner = (root)=>{
            if(!root) return [];
            
            if(root.left) inner(root.left);
            if(root.right) inner(root.right)
             visited.push(root.val);

        }
        inner(root);
    return visited
    
    const postorderTraversal = (root, traversalOrder = []) => {
  if (!root) {
    return [];   
  }
  
  postorderTraversal(root.left, traversalOrder);
  
  postorderTraversal(root.right, traversalOrder);

  traversalOrder.push(root.val);
  
  return traversalOrder;
};

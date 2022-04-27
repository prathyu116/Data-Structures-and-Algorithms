/*
https://www.youtube.com/watch?v=EoAsWbO7sqg&list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk&index=9
https://www.youtube.com/watch?v=k51JOgA0mw0

https://takeuforward.org/data-structure/level-order-traversal-of-a-binary-tree/
     20
  10    30
 5 15  25 35
1)inorder to print level order we use queeue DS..which first have root value(20)
2)then iterate over the queue
3)pop that 20 and check left and right have value ....aanenkil put into queue DS
4)then i put this 20 into ans datastructure

then queueil next elemns edkkum
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

var levelOrder = function(root) {
        var ans=[]
    if(!root) return []
    var queue=[root]
    while(queue.length ){
         var size = queue.length
         ans.push(queue.map(node=>node.val));
         var level=[]
         for(var i=0;i<size;i++){
             node=queue.shift()
          if(node.left)  queue.push(node.left);  
          if(node.right)  queue.push(node.right);
                        
         }
    }
    return ans;


}

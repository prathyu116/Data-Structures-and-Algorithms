

// 1 2 3  node=2
// just take value 3 put at 2  (2 lekk 3 varanm)


const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
function deleteNode(node){
    
    //
    node.data = node.next.data
    node.next = node.next.next
}

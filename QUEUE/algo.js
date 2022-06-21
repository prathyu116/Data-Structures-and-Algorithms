// program to implement queue data structure
front frist pointer
rear moove cheythondirikkum--point to the elemnt were next ele is going to be inserted

class Queue {
  constructor() {
    this.items = [];
  }

  // add element to the queue
  enqueue(element) {
    return this.items.push(element);
  }

  // remove element from the queue
  dequeue() {
    if (this.items.length > 0) {
      return this.items.shift();
    }
  }

  // view the last element
  peek() {
    return this.items[this.items.length - 1];
  }

  // check if the queue is empty
  isEmpty() {
    return this.items.length == 0;
  }

  // the size of the queue
  size() {
    return this.items.length;
  }

  // empty the queue
  clear() {
    this.items = [];
  }
  print(){
    console.log(this.items)
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(8);
queue.print()
queue.dequeue();
console.log(queue.items);

console.log(queue.peek());





-----------------adanced--------------
class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }
  enqueue(element){
    this.items[this.rear]=element
    this.rear++
  }
  dequee(){
   let itm =this.items[this.front] 
    delete this.items[this.front]
    this.front++
    return itm
  }
  isempty(){
    return this.rear-this.front===0
  }
}

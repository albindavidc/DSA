class Node{
    constructor(value){
      this.value = value
      this.next = null
    }
  }
  
  class Queue{
    constructor(){
      this.front = null
      this.rear = null
    }
  
    isEmpty(){
      return this.front === null
    }
  
    // Enqueue
    
    enqueue(val){
      const node = new Node(val)
      if(this.isEmpty()){
        this.front = node
        this.rear = node
      }
      else{
        this.rear.next = node
        this.rear = node
      }
    }
  
    // Dequeue
  
    dequeue(){
      if(this.isEmpty()){
        console.log("Error")
      }
      
        let dequE = this.front
        this.front = this.front.next
        if(this.front === null){
          this.rear = null
        }
      
      return dequE
    }
  
    // 
    top(){
      if(this.isEmpty()){
        console.log("error")
      }
      return this.front.value
    }  
  
    print(){
      let curr = this.front
      let list = ` `
      while(curr){
        list += `${curr.value} `
        curr = curr.next
      }
      console.log(list)
    }
  }
  
  const q = new Queue()
  q.enqueue(10)
  q.enqueue(20)
  q.enqueue(30)
  q.enqueue(40)
  q.dequeue()
  console.log(q.top())
  q.print()






// //Revise Queue
// class Queue{
//     constructor(){
//         this.items = {};
//         this.rear = 0;
//         this.front = 0;
//     }

//     enqueue(element){
//         this.items[this.rear] = element;
//         this.rear++;
//     }

//     dequeue(){
//         const item = this.items[this.front];
//         delete this.items[this.front];
//         this.rear--;
//         return item
//     }

//     isEmpty(){
//         return this.rear - this.front === 0;
//     }

//     size(){
//         return this.rear - this.front
//     }

//     print(){
//         console.log(this.items);
//     }
// }

// let queue = new Queue();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.print();

// queue.dequeue();
// queue.print();










// //Optimized version of queue
// class Queue{
//     constructor(){
//         this.items = {};
//         this.rear = 0;
//         this.front = 0;
//     }

//     enqueue(element){
//         this.items[this.rear] = element;
//         this.rear ++;
//     }

//     dequeue(){
//         const item = this.items[this.front];
//         delete this.items[this.front];
//         this.front++;
//         return item;
//     }

//     isEmpty(){
//         return this.rear - this.front === 0;
//     }

//     peek(){
//         return this.items[this.front]
//     }

//     size(){
//         return this.rear - this.front;
//     }

//     print(){
//         console.log(this.items)
//     }
// }

// const queue = new Queue();
// console.log(queue.isEmpty());

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.enqueue(50);
// queue.print();

// console.log(queue.dequeue());
// console.log(queue.peek());


// //Using Function
// var MyQueue = function() {
//     this.items = {};
//     this.rear = 0;
//     this.front = 0;
// };

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// MyQueue.prototype.push = function(x) {
//     this.items[this.rear] = x;
//     this.rear ++;
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.pop = function() {
//     const items= this.items[this.front];
//     delete this.items[this.front];
//     this.front++;
//     return items;
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.peek = function() {
//     return this.items[this.front]
// };

// /**
//  * @return {boolean}
//  */
// MyQueue.prototype.empty = function() {
//     return this.rear - this.front === 0;
// };





// class Queue{
//     constructor(){
//         this.items = [];
//     }

//     enqueue(element){
//         this.items.push(element);
//     }

//     dequeue(){
//         return this.items.shift();
//     }

//     isEmpty(){
//         return this.items.length === 0;
//     }

//     peek(){
//         if(!this.isEmpty()){
//             return this.items[0]
//         }
//     }

//     size(){
//         return this.items.length;
//     }

//     print(){
//         console.log(this.items.toString());
//     }
// }

// const queue = new Queue();
// console.log(queue.isEmpty());

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);

// console.log(queue.size());
// queue.print();

// console.log(queue.dequeue());
// console.log(queue.peek());
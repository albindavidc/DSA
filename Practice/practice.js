class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.rear = null;
    }

    isEmpty(){
        return this.rear === null
    }

    push(){
        if(this.isEmpty()){
            return 
        }
    }
}
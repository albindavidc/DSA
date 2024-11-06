var MyStack = function(){
    this.items = {};
    this.rear = 0;
}

MyStack.prototype.push = function(x){
    this.items[this.rear] = x;
    this.rear++;
}

MyStack.prototype.pop = function(){
    if(this.rear === 0) return undefined;

    const item = this.items[this.rear -1];
    delete this.items[this.rear -1];
    this.rear --;
    return item;
}

MyStack.prototype.top = function(){
    if(this.rear === 0) return undefined;
    return this.items[this.rear -1];
}

MyStack.prototype.empty = function(){
    return this.rear === 0;
}

let obj = new MyStack();
obj.push(20);
obj.push(30)
console.log(obj.pop())
console.log(obj.top())
console.log(obj.empty())

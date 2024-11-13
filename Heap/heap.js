class Heap{
    constructor(){
        this.heap = [];
    }

    size(){
        return this.heap.length;
    }

    peek(){
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    // Get the index
    getParentIndex(index){
        return Math.floor((index  - 1 ) /2);
    }

    getLeftChildIndex(index){ 
        return 2* index + 1;
    }

    getRightChildIndex(index){
        return 2 * index  + 2;
    }

    // Check the value
    hasParent(index){
        return this.getParentIndex(index) >= 0;
    }

    hasLeftChild(index){
        return this.getLeftChildIndex(index) < this.heap.length;
    }

    hasRightChild(index){
        return this.getRightChildIndex(index) < this.heap.length;
    }

    //Get the value
    getParent(index){
        return this.heap[this.getParentIndex(index)];
    }

    getLeftChild(index){
        return this.heap[this.getLeftChildIndex(index)];
    }

    getRightChild(index){
        return this.heap[this.getRightChildIndex(index)]
    }

    insert(value){
        this.heap.push(value);
        this.heapifyUp();
    }

    swap(index1, index2){
        let temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;

    }

    heapifyUp(){
        let index = this.heap.length - 1;
        while(this.hasParent(index) && this.getParent(index) > this.heap[index]){
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index)
        }
    }

    remove(){
        if(this.heap.length === 0){
            return null;
        }

        const item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyUp();

        return item;
    }

    heapifyDown(){
        let index = 0;

        while(this.hasLeftChild(index)){
            let smallerChildIndex = this.getLeftChildIndex(index);
            if(this.hasRightChild(index) && this.getRightChild(index) < this.getLeftChild(index)){
                smallerChildIndex = this.getRightChild(index);
            }
            if(this.heap[index] < this.heap[smallerChildIndex]){
                break;
            }else{
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }

    printHeap() {
		console.log("Heap values:", this.heap);
	}


}

const heap = new Heap();
heap.insert(10)
heap.insert(30)

heap.printHeap()
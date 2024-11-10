class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    }
}

const binarySearch = new BinarySearchTree();
const result = binarySearch.isEmpty() === true ? console.log("This tree is empty") : console.log("This tree is not empty");

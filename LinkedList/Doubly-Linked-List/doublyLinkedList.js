class Node{
    constructor(value){
        this.value = value;
        this.next = null
        this.prev = null
    }
}




class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    getSize(){
        console.log(this.size)
    }

    isEmpty(){
        if(this.head === null){
            console.log("This is an empty list")
        }else{
            console.log("This is a " + this.size + " size linked list")
        }
    }

    append(value){
        let node = new Node(value);

        if(!this.head){
            this.head = node;
            this.tail = node;
        }else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size ++
    }

    delete(value){
        if(this.head === null)return;

        let curr = this.head;
        while(curr !== null){
            if(curr.value === value){
                if(curr === this.head){
                    this.head = curr.next;
                    if(this.head !== null){
                        this.head.prev = null;
                    }else{
                        this.tail = null;
                    }
                }else if(curr === this.tail){
                    this.tail = curr.prev;
                    this.tail.next = null;
                }else{
                    curr.prev.next = curr.next;
                    curr.next.prev = curr.prev;
                }

                this.size --;
                return;
            }
            curr = curr.next;
        }
    }

    merge (list1, list2){        
        if(list1 === null){
            return list2;
        }
        if(list2 === null){
            return list1;
        }

        let list1End = list1.head;

        while(list1End.next !== null){
            list1End = list1End.next;
        }

        list1End.next = list2.head;
        list2.head.prev = list1End;

        return list1
    }

    split(){
        if (this.head === null) return [new LinkedList(), new LinkedList()];

        let slow = this.head;
        let fast = this.head;

        while(fast !== null && fast.next.next !== null){
            slow = slow.next;
            fast = fast.next.next;
        }
        
        let list2Head = slow.next;
        
        if(list2Head ){
            list2Head.prev = null
        }
        slow.next = null;
        
        let list1 = new LinkedList();
        list1.head = this.head;
        list1.tail = slow;
        list1.size = Math.ceil(this.size /2)

        let list2 = new LinkedList();
        list2.head = list2Head;
        list2.tail = this.tail
        list2.size = Math.floor(this.size/2)

        return [list1, list2]

    }

    findNthNode(n){
        if(this.head === null || n < 0)return;

        let curr = this.tail;
        let index = 0;
        while(curr !== null && index < n){
           index++
           curr = curr.prev;
        }

        return curr ? curr.value : null
    }

    removeMiddle(){
        if(this.head === null) return;

        let slow = this.head;
        let fast = this.head;

        while(fast !== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next;
        }

        slow.prev.next = slow.next;
        slow.next.prev = slow.prev;

        this.size--

    }

    removeAllDuplicates(){
        if(this.head === null) return;

        let seen = new Set();
        let curr = this.head;

        while(curr !== null){
            if(seen.has(curr.value)){
                if(curr === this.tail){
                    this.tail = curr.prev;
                    this.tail.next = null
                }else{
                    curr.prev.next = curr.next
                    curr.next.prev = curr.prev;
                }
                this.size--
            }else{
                seen.add(curr.value)
            }
            curr = curr.next;
        }
    }

    // removeDuplicates() {
    //     if (this.head === null) return;
    
    //     let curr = this.head;
    
    //     while (curr !== null) {
    //         let runner = curr.next;
    
    //         while (runner !== null) {
    //             if (runner.value === curr.value) {
    //                 // Duplicate found; remove runner node
    //                 if (runner === this.tail) {
    //                     this.tail = runner.prev;
    //                     this.tail.next = null;
    //                 } else {
    //                     runner.prev.next = runner.next;
    //                     runner.next.prev = runner.prev;
    //                 }
    //                 this.size--;
    //             }
    //             runner = runner.next;
    //         }
    //         curr = curr.next;
    //     }
    // }

    arrayToLL(arr){
        if(arr.length < 1) return null;

        this.head = new Node(arr[0])
        let curr = this.head;

        for(let i = 1; i< arr.length ; i++){
            let newNode = new Node(arr[i])

            curr.next = newNode
            newNode.prev = curr;
            curr = newNode;
        }

        this.tail = curr
    }
    

    reverse(){
        if(this.head === null) return;

        let curr = this.head;
        let temp = null;

        this.head = this.tail;

        while(curr !== null){
            temp = curr.next;
            curr.next = curr.prev;
            curr.prev = temp;
            
            curr = temp
        }

        temp = this.head;
        this.head = this.tail;
        this.tail = temp;
       
    }

    print(){
        let result = [];
        let curr = this.head;
        while(curr !== null){
            result.push(curr.value)
            curr = curr.next;
        }
        console.log(result)
    }

}

let list = new LinkedList();

list.append(4);
list.append(10);
list.append(10);
list.append(9);
list.append(10);
list.append(12);
list.append(9);


list.print()

// const [list1, list2] = list.split();
// list1.print()
// list2.print()

console.log(list.findNthNode(3))
list.removeAllDuplicates();
list.print()

let list3 = new LinkedList();

list3.arrayToLL([3,4,5,6,7])
list3.print()

// list.delete(10);

// list.removeMiddle()
// list.removeMiddle()
// list.print();



// let list2 = new LinkedList();

// list2.append(4);
// list2.append(7);
// list2.append(10);
// list2.append(9);
// list2.append(10);
// list2.print()


// list2.merge(list, list2)
// list.print()



// list.getSize()
// list.isEmpty()

// list.reverse();
// list.print();
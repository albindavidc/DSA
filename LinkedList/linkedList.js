class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  append(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next !== null) {
        curr = curr.next;
      }
      curr.next = node;
    }
  }

  delete(value) {
    if (!this.head) return;

    if (this.head.value === value) {
      this.head = this.head.next;
    }
    let prev = this.head;
    let curr = this.head.next;
    while (curr !== null) {
      if (prev.next.value === value) {
        prev.next = curr.next;
      }
      prev = curr;
      curr = curr.next;
    }
  }

  insertAfter(valueToAdd, valueToCheck) {
    if (!this.head) return;
    const node = new Node(valueToAdd);

    let curr = this.head;
    while (curr !== null) {
      if (curr.value === valueToCheck) {
        node.next = curr.next;
        curr.next = node;
        return;
      }
      curr = curr.next;
    }
  }

  removeDuplicate() {
    if (!this.head) return;

    let prev = this.head;
    let curr = this.head.next;

    while (curr !== null) {
      if (prev.value === curr.value) {
        prev.next = curr.next;
      } else {
        prev = curr;
      }
      curr = curr.next;
    }
  }

  findLength() {
    let length = 0;

    if (!this.head) return;

    let curr = this.head;
    while (curr.next !== null) {
      length++;
      curr = curr.next;
    }
    return length;
  }

  //Create Cycle
  createCycle(pos) {
    if (pos < 0) return;

    let tail = this.head;
    let loopNode = this.head;

    let index = 0;

    while (tail.next) {
      if (pos === index) loopNode = tail;
      tail = tail.next;
      index++;
    }
    tail.next = loopNode;
  }

  //Check Cycle
  checkCycle() {
    if (!this.head) return;

    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (fast === slow) {
        console.log("This linked list has cycle");
        return true;
      }
    }
    return false;
  }

  //Lenght of the loop
  checkLengthCycle() {
    if (!this.head) return;

    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        let cycleLength = 1;
        let curr = slow;

        while (curr.next !== slow) {
          cycleLength++;
          curr = curr.next;
        }
        return cycleLength;
      }
    }
  }

  //Find Middle Node
  findMiddleNodeValue(){
    if(!this.head) return [];

    let slow = this.head;
    let fast = this.head;

    let middleValues = [];

    while(fast && fast.next){
       slow = slow.next;
       fast = fast.next.next;
    }

    if(fast === null){
        middleValues.push(slow.value)
        if(slow.next){
            middleValues.push(slow.next.value)
        }
    }else{
        middleValues.push(slow.value)
    }

    return middleValues;
  }

  //Merge LL
  static mergeLL(list1, list2){
    if(!list1.head){
        return list2;
    }
    if(!list2.head){
        return list1;
    }
    let list1Tail = list1.head;
    while(list1Tail.next){
        list1Tail = list1Tail.next
    }
    list1Tail.next = list2.head

    return list1
  }

  print() {
    let curr = this.head;
    let result = [];
    while (curr !== null) {
      result.push(curr.value);
      curr = curr.next;
    }
    console.log(result);
  }

  printInReverse(curr = this.head, result = []) {
    if (curr === null) return result;

    this.printInReverse(curr.next, result);
    result.push(curr.value);
    return result;
  }
}

function convertArrayToLL(arr) {
  const list = new LinkedList();
  arr.forEach((eachEl) => {
    list.append(eachEl);
  });
  list.print();
}

convertArrayToLL([2, 3, 4, 58, 9]);

const list = new LinkedList();

list.append(2);
list.append(5);
list.append(6);
list.print();

list.prepend(9);
list.prepend(78);
list.append(35);
list.print();

// list.delete(35);
list.print();
console.log(list.findMiddleNodeValue())

const list2 = new LinkedList();
list2.append(4);
list2.append(5);
list2.append(6);


const mergedList = LinkedList.mergeLL(list, list2);

// Print the merged list
mergedList.print(); // Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6


// list.insertAfter(87, 5);
// list.print();

// list.append(6);
// list.print();

// list.removeDuplicate();
// list.print();

// console.log("This is the length of the list", list.findLength());

// console.log(list.printInReverse());

// list.createCycle(1);

// console.log(list.checkCycle());

// console.log(list.checkLengthCycle());


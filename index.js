class Node{
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList{

  constructor(value){
    this.head = {
      value: value, 
      next: null, 
      prev: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value){
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value){
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList(){
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
   return array;
  }

  insert(index, value){

    if (index >= this.length) {
  this.append(value);
  return this.printList();
     }

  const newNode = new Node(value);
  const leader = this.traverseToIndex(index-1);
  //swap
  let follower = leader.next;
  leader.next = newNode;
  newNode.prev = leader;
  newNode.next = follower;
  follower.prev = newNode;
  this.length++;
  return this.printList();
  }

  remove(index){
    const leader = this.traverseToIndex(index-1);
    const unWantedNode = leader.next;
    leader.next = unWantedNode.next;
    this.length--;
    return this.printList()
  }

  traverseToIndex(index){
    //check params
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

}


const myLinkedList = new DoublyLinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);

myLinkedList.prepend(1);

myLinkedList.printList();

myLinkedList.insert(2, 99);
// myLinkedList.insert(20, 88);

// myLinkedList.remove(2);
// myLinkedList.remove(2);






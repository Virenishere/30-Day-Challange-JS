//Day 17 : Data Structures
//Activity 1: Linked List 

//task 1: Implement a Node class to represent an element in a linked list with properties value and next.

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const node1 = new Node(5);
const node2 = new Node(10);
node1.next = node2; //Linking nodes

console.log(node1)
// Output: Node { value: 5, next: Node { value: 10, next: null } }

//task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.

// Queues: We can create it using Arrays and Linked Lists but is preferable Linked Lists cause efficiency because, in case is an array and you remove the first item you have to reassign all the index

// Joy
// Matt
// Pavel
// Samir

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  //see the first item:
  peek() {
    return this.first
  }

  //add a node to the queue:
  enqueue(value) {
    const newNode = new Node(value)

    if (!this.length) {
      this.first = newNode
      this.last = newNode
    }

    this.last.next = newNode
    this.last = newNode

    this.length++
    return this
  }

  //remove the first node:
  dequeue() {
    if (!this.length) {
      return null
    }

    if (this.first === this.last) {
      this.last = null
    }

    this.first = this.first.next

    this.length--
    return this
  }

  // check if is empty:
  isEmpty() {
    return !this.length
  }
}

const myQueue = new Queue()

myQueue.peek()
myQueue.enqueue("Joy")
myQueue.enqueue("Matt")
myQueue.enqueue("Pavel")
myQueue.enqueue("Samir")
myQueue.dequeue()
myQueue.isEmpty()

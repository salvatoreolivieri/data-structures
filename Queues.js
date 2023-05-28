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
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
myQueue.isEmpty()

// Implement Queue using Stacks

class CrazyQueue {
  constructor() {
    this.first = []
    this.last = []
  }

  enqueue(value) {
    const length = this.first.length
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop())
    }
    this.last.push(value)
    return this
  }

  dequeue() {
    const length = this.last.length
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop())
    }
    this.first.pop()
    return this
  }
  peek() {
    if (this.last.length > 0) {
      return this.last[0]
    }
    return this.first[this.first.length - 1]
  }
}

const myCrazyQueue = new CrazyQueue()
myCrazyQueue.peek()
myCrazyQueue.enqueue("Joy")
myCrazyQueue.enqueue("Matt")
myCrazyQueue.enqueue("Pavel")
myCrazyQueue.peek()
myCrazyQueue.dequeue()
myCrazyQueue.dequeue()
myCrazyQueue.dequeue()
myCrazyQueue.peek()

// Stacks: We can create it using Arrays and Linked Lists

//google
//udemy.com
//youtube

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null
    this.bottom = null
    this.length = 0
  }
  //see the top node:
  peek() {
    return this.top
  }
  //add a node to the top:
  push(value) {
    const newNode = new Node(value)

    if (!this.length) {
      this.top = newNode
      this.bottom = newNode
    }
    const holdingPointer = this.top
    this.top = newNode
    this.top.next = holdingPointer

    this.length++

    return this
  }
  //remove the top:
  pop() {
    if (!this.length) {
      return null
    }

    if (this.top === this.bottom) {
      this.bottom = null
    }

    this.top = this.top.next
    this.length--

    return this
  }
  // check if is empty:
  isEmpty() {
    return !this.length
  }
}

const myStack = new Stack()

myStack.peek()
myStack.push("google")
myStack.push("udemy")
myStack.push("discord")
myStack.pop()
myStack.pop()
myStack.isEmpty()

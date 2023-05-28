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
  peek() {}
  push(value) {}
  pop() {}
}

// Queues: We can create it using Arrays and Linked Lists but is preferable Linked Lists cause efficiency because, in case is an array and you remove the first item you have to reassign all the index

// Tim -> John -> Sam

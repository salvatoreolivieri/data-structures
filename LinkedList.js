// Linked List: 1-->10-->5-->21
// https://visualgo.net/en

let linkedListObject = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 21,
        next: null,
      },
    },
  },
}

____

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedListClass {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value)

    this.tail.next = newNode
    this.tail = newNode
    this.length++

    return this
  }

  preprend(value) {
    const newNode = new Node(value)

    newNode.next = this.head
    this.head = newNode
    this.length++

    return this
  }

  printList() {
    const array = []
    let currentNode = this.head

    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }

    return array
  }

  traverseToIndex(index) {
    let counter = 0
    let currentNode = this.head

    while (counter !== index) {
      currentNode = currentNode.next

      counter++
    }

    return currentNode
  }

  insert(index, value) {
    // Check params
    if (index >= this.length) {
      return this.append(value)
    }

    const newNode = new Node(value)

    const previousItem = this.traverseToIndex(index - 1)
    const nextItem = previousItem.next

    previousItem.next = newNode
    newNode.next = nextItem
    this.length++
  }

  remove(index) {
    const previousItem = this.traverseToIndex(index - 1)

    const unwantedItem = previousItem.next
    previousItem.next = unwantedItem.next
    this.length--
  }

  reverse() {
    if (!this.head.next) {
      return this.head
    }

    let itemBefore = this.head
    this.tail = this.head
    let itemAfter = itemBefore.next

    while (itemAfter) {
      const temporaryVariable = itemAfter.next

      itemAfter.next = itemBefore
      itemBefore = itemAfter
      itemAfter = temporaryVariable
    }

    this.head.next = null
    this.head = itemBefore

    return this
  }
}

const myLinkedList = new LinkedListClass(10)
myLinkedList.append(5)
myLinkedList.append(21)

myLinkedList.preprend(1)

myLinkedList.printList()
myLinkedList.insert(2, 99)
myLinkedList.printList()

myLinkedList.remove(2)
myLinkedList.printList()

myLinkedList.reverse()
myLinkedList.printList()

____

class DoublyNode {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedListClass {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = new DoublyNode(value)

    newNode.prev = this.tail
    this.tail.next = newNode
    this.tail = newNode
    this.length++

    return this
  }

  preprend(value) {
    const newNode = new DoublyNode(value)

    newNode.next = this.head
    this.head.prev = newNode
    this.head = newNode
    this.length++

    return this
  }

  printList() {
    const array = []
    let currentNode = this.head

    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }

    return array
  }

  traverseToIndex(index) {
    let counter = 0
    let currentNode = this.head

    while (counter !== index) {
      currentNode = currentNode.next

      counter++
    }

    return currentNode
  }

  insert(index, value) {
    // Check params
    if (index >= this.length) {
      return this.append(value)
    }

    const newNode = new DoublyNode(value)

    const previousItem = this.traverseToIndex(index - 1)
    const nextItem = previousItem.next

    previousItem.next = newNode
    newNode.prev = previousItem

    newNode.next = nextItem
    nextItem.prev = newNode
    this.length++
  }

  remove(index) {
    const previousItem = this.traverseToIndex(index - 1)

    const unwantedItem = previousItem.next
    previousItem.next = unwantedItem.next
    previousItem.prev = previousItem

    this.length--
  }
}

const myDoublyLinkedList = new DoublyLinkedListClass()

myDoublyLinkedList.append(5)
myDoublyLinkedList.append(21)

myDoublyLinkedList.preprend(1)

myDoublyLinkedList.printList()
myDoublyLinkedList.insert(2, 99)
myDoublyLinkedList.printList()

myDoublyLinkedList.remove(2)
myDoublyLinkedList.printList()

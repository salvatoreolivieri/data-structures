// Binary Search Tree

class Node {
  constructor(value) {
    this.left = null
    this.right = null
    this.value = value
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)

    if (!this.root) {
      this.root = newNode
    }

    let currentNode = this.root

    while (true) {
      // Left
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode
          return this
        }
        currentNode = currentNode.left
      } else {
        // Right
        if (!currentNode.right) {
          currentNode.right = newNode
          return this
        }
        currentNode = currentNode.right
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false
    }

    let currentNode = this.root

    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        currentNode = currentNode.right
      } else if (value === currentNode.value) {
        return currentNode
      }
    }
    return false
  }
  remove() {}
}

const tree = new BinarySearchTree()

tree.insert(9)
tree.lookup(9)
// tree.insert(4)
// tree.insert(6)
// tree.insert(20)
// tree.insert(170)
// tree.insert(15)
// tree.insert(1)

console.log(tree)

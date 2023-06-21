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

    if (this.root === null) {
      this.root = newNode
    } else {
      let currentNode = this.root

      while (true) {
        if (value < currentNode.value) {
          //Left
          if (!currentNode.left) {
            currentNode.left = newNode
            return this
          }
          currentNode = currentNode.left
        } else {
          //Right
          if (!currentNode.right) {
            currentNode.right = newNode
            return this
          }
          currentNode = currentNode.right
        }
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

  breadthFirstSearch() {
    let currentNode = this.root
    let list = []
    let queue = []
    queue.push(currentNode)

    while (queue.length > 0) {
      currentNode = queue.shift()

      list.push(currentNode.value)

      if (currentNode.left) {
        queue.push(currentNode.left)
      }

      if (currentNode.right) {
        queue.push(currentNode.right)
      }

      console.log(list)

      return list
    }
  }

  breadthFirstSearchRecursive(queue, list) {
    if (!queue.length) {
      console.log(list)

      return list
    }

    let currentNode = queue.shift()
    list.push(currentNode.value)

    if (currentNode.left) {
      queue.push(currentNode.left)
    }

    if (currentNode.right) {
      queue.push(currentNode.right)
    }

    return this.breadthFirstSearchRecursive(queue, list)
  }

  DFSInorder() {
    return traverseInOrder(this.root, [])
  }

  DFSPostorder() {
    return traversePostOrder(this.root, [])
  }

  DFSPreorder() {
    return traversePreOrder(this.root, [])
  }
}

const traverseInOrder = (node, list) => {
  if (node.left) {
    traverseInOrder(node.left, list)
  }

  list.push(node.value)

  if (node.right) {
    traverseInOrder(node.right, list)
  }

  console.log(list)
  return list
}

const traversePreOrder = (node, list) => {
  list.push(node.value)

  if (node.left) {
    traversePreOrder(node.left, list)
  }

  if (node.right) {
    traversePreOrder(node.right, list)
  }

  console.log(list)
  return list
}

const traversePostOrder = (node, list) => {
  if (node.left) {
    traversePostOrder(node.left, list)
  }

  if (node.right) {
    traversePostOrder(node.right, list)
  }

  list.push(node.value)

  console.log(list)
  return list
}

const tree = new BinarySearchTree()

tree.insert(9)
tree.lookup(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

tree.breadthFirstSearch()
tree.breadthFirstSearchRecursive([tree.root], [])

tree.DFSPostorder()
tree.DFSPreorder()
tree.DFSInorder()

console.log(tree)

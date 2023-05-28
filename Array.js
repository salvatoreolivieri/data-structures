// Reverse a string
const reverseString = (string) => string.split("").reverse().join("")

const originalString = "Hello, World!"
const reversedString = reverseString(originalString)
console.log(reversedString)

_____

// Merge and sort two array
const mergeAndSortArrays = (array1, array2) =>
  [...new Set([...array1, ...array2])].sort((a, b) => a - b) // con il new Set() rimuovi anche i duplicati

const array1 = [0, 3, 4, 31]
const array2 = [4, 6, 30]

const mergedAndSortedArray = mergeAndSortArrays(array1, array2)
console.log(mergedAndSortedArray)

// TODO: https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/learn/lecture/12310382#overview

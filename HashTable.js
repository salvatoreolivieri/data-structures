// In Javascript is Object (in general consider a key-value Data Structure)

_____

// 1 Google Question:

//Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// Given an array = [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

const array = [2, 5, 5, 2, 3, 5, 1, 2, 4]

// using loop
const firstRecurringCharacter = (array) => {
  const seenNumber = new Set()

  for (const number of array) {
    if (seenNumber.has(number)) {
      return number
    }

    seenNumber.add(number)
  }

  return undefined
}

// using find
const findFirstDuplicate = (array) => {
  const seenNumbers = new Set()
  return array.find(
    (num) => seenNumbers.has(num) || (seenNumbers.add(num), false)
  )
}

const recurringCharacter = firstRecurringCharacter(array)

console.log(recurringCharacter)

// https://www.theodinproject.com/lessons/foundations-fundamentals-part-3

// Write a function called add7 that takes one number and returns that number + 7.

function add7(a) {
    return a + 7
}

// Write a function called multiply that takes 2 numbers and returns their product.

function multiply(a, b) {
    return a * b
}

// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

function capitalize(inputString) {
  let lowered = inputString.toLowerCase()
  let firstCapital = lowered.charAt(0).toUpperCase()
  let finalResult = firstCapital + lowered.slice(1)
  return finalResult
}

// Write a function called lastLetter that takes a string and returns the very last letter of that string:
// lastLetter("abcd") should return "d"

function lastLetter(inputString) {
    let singleLetter = inputString.charAt(inputString.length -1)
    return singleLetter
}
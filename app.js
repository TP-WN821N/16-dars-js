// Berilgan matnda katta va kichik harflarning sonini toping 
let string = "Hello World!"
function countCase(str = '') {
  let uppercase = 0
  let lowercase = 0
  let arr = str.split("")
  arr.forEach(item => {
    if ('a' <= item && item <= 'z') {
      lowercase++
    } else if ('A' <= item && item <= 'Z') {
      uppercase++
    }
  })
  return { lowercase, uppercase }
}
// console.log(countCase(string));


// Berilgan massivdagi juft va toq indekslardagi elementlarning yig'indisini alohida-alohida hisoblang.
let array = [1, 2, 3, 4, 5, 6]
const evenOddindexSums = (arr = []) => {
  let toqIndexsSum = 0
  let juftIndexsSum = 0
  arr.forEach((item, index) => {
    if (item % 2 == 0) {
      juftIndexsSum += index
    } else {
      toqIndexsSum += index
    }
  })
  return { juftIndexsSum, toqIndexsSum }
}
// console.log(evenOddindexSums(array));


// Bu bergan vazifaningiz
let email = "ad3@gmil.com"
const getEmail = (email) => {
  let result = false
  let endTest = email.split("").splice(-9).join("") == "@gmil.com"
  let indexOne = email.indexOf('@')
  if (indexOne < 3) {
    return "false"
  }
  let oneTest = email.split("").splice(0, indexOne)
  for (let i = 0; i < 3; i++) {
    if (isNaN(oneTest[i])) {
      result = true
    } else {
      result = false
    }
  }
  return result
}
// console.log(getEmail(email));


// Berilgan matritsani soat strelkasiga qarama-qarshi yo'nalishda 90 daraja aylantiring.
let matrix = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9]
]
function rotateMatrix(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    let new_arr = []
    for (let g = 0; g < arr.length; g++) {
      new_arr.push(arr[g][i])
    }
    result.push(new_arr)
  }
  return result.reverse()
}
// console.log(rotateMatrix(matrix));


// Berilgan qator ichidagi barcha bo'shliqlarni olib tashlang.
let twString = 'Hello World! How are you?'
const removeSpaces = (str) => {
  let arr = str.split('')
  let new_arr = arr.filter(item => item != ' ')
  return new_arr.join("")
}
// console.log(removeSpaces(twString));


// Berilgan ikki qatorning anagramma ekanligini tekshiring
function areAnagrams(str1 = "", str2 = "") {
  let arr1 = str1.split("").sort().join("")
  let arr2 = str2.split("").sort().join("")
  let result
  if (arr1 === arr2) {
    result = true
  } else {
    result = false
  }
  return result
}
// console.log(areAnagrams("listen", "silent"))
// console.log(areAnagrams("hello", "world"))


// Berilgan massivdagi eng ko'p takrorlangan elementni toping.
function mostFrequentElement(arr = []) {
  let obj = {}
  arr.forEach((item, index) => {
    let count = arr.filter(filItem => filItem == item).length
    obj[item] = count
  })
  let keys = Object.keys(obj)
  let values = Object.values(obj)
  let indexOf = values.indexOf(Math.max(...values))
  return keys[indexOf]
}
// console.log(mostFrequentElement([1, 3, 2, 1, 4, 1, 3, 1, 5, 1]))


// Berilgan qator ichidagi barcha raqamlarning yig'indisini hisoblang.
function sumOfDigits(str = '') {
  let arr = str.split("").filter(item => !isNaN(item) && item != " ")
  let sum = arr.reduce((a, b) => a + +b, 0)
  return sum
}
// console.log(sumOfDigits("abc123def45"))


// Berilgan qator ichidagi har bir harfning chastotasini hisoblang.
function letterFrequency(str = "") {
  let obj = {}
  let arr = str.split("").filter(item => item != " ")
  arr.forEach(item => {
    obj[item] = arr.filter(filItem => filItem == item).length
  })
  return obj
}
// console.log(letterFrequency("hello world"));
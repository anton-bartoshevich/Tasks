function compareNumeric(a, b) {
  if (a > b) return 1
  if (a == b) return 0
  if (a < b) return -1
}

let arr = [5, 4, -7, 12]
arr.sort(compareNumeric)
arr.splice(0, 1)
alert(arr)
let sortArr = arr
let sum = sortArr.reduce((sum, current = 2) => sum + current)
alert(sum)

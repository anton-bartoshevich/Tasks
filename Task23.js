let arr = ['1', '3', '3', '4', '1', '2']
let result = arr.filter((item, index) => {
  return arr.indexOf(item) !== index
})
alert(result)

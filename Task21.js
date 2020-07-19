const getFarengeit = (a) => {
  a = prompt('Введите градус, С')
  let b = 1.8
  let c = 32
  let res
  res = a * b + c
  alert(res + ' Градусов по Фаренгейту')
  return res
}
alert(getFarengeit())

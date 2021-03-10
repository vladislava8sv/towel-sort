
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(typeof matrix != "undefined" && matrix != null && matrix.length > 0){//стандартная проверка на пустую матрицу, нужны все условия тк "Cannot read property 'length' of undefined"
  var result = [];
  matrix.forEach((array, i) => { //array-Текущий обрабатываемый элемент в массиве. i-Индекс текущего обрабатываемого элемента в массиве.
    if (i % 2 == 0) { //индексация массива начинается с нуля, здесть array-строка массива
      result = result.concat(array)}//соединяет result с array
    else { 
      result = result.concat(array.reverse());}//reverse переставляет элементы матрицы в обратном порядке
  })
  return result;}
  else {return ([]);}
  }

/*Функция min(a, b)*/
let getMin = function(a,b) {
    a = prompt('Введите число a:');
    b = prompt('Введите число b:');
    if ( a > b) {
        alert(b);
    }
    else if (b > a) {
        alert(a);
    }

}
alert(getMin());
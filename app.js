let num = prompt('Введите число большее 100');
for (let i = 0; i <= 100; i++) {

    if (num < 100) {
        num = prompt('Введите ещё раз число большее 100');
    }   
    else {
        alert('Бинго!');
        break;
    } 
}





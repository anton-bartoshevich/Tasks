/*Напишите код, который будет спрашивать логин с помощью prompt. */
let login = prompt('Введите логин:',"");
if (login == 'Админ') {
    let pass = prompt('Введите пароль:',"");
        if (pass == 'Я главный') {
                alert('Здравствуйте!');
        }
        else if (pass != 'Я главный') {
                alert('Неверный пароль');
        }
        else if (pass == null) {
            alert('Отменено');
        }
    }
else if (login == null) {
        alert('Отменено');
    }  
else if (login != 'Админ') {
    alert('Я вас не знаю');
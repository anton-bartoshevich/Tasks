let login = prompt('Кто вы?',"");
let message;
message = (login == 'Сотрудник')?'Привет' :
          (login == 'Директор')?'Здравствуйте' :
          (login == '')?'Нет логина':
          '';
alert(message);











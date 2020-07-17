/*Создайте объект calculator (калькулятор) с тремя методами*/
let calculator = {

    sum : function () {
            return  this.a + this.b;					
        },

    mul : function ()  {				
            return  this.a *  this.b;						
        },

    read : function () {
        this.a =  + prompt('Введите число а', 0);
this.b =  + prompt('Введите число b', 0);											
        }	
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

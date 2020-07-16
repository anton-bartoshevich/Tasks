/*При помощи цикла for выведите чётные числа от 2 до 10. */
let num = 0;

for (let i = 2; i <= 10; i+=2) 
{
  num = num + i;
  alert(num);
  num = 0;
}
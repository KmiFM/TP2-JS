/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
*/

let edad1=parseInt(prompt('Coloque la edad de la primer persona'));
let nombre1=prompt('Coloque el nombre de la primera persona');

let edad2=parseInt(prompt('Coloque la edad de la segunda persona'));
let nombre2=prompt('Coloque el nombre de la segunda persona');

let edad3=parseInt(prompt('Coloque la edad de la tercera persona'));
let nombre3=prompt('Coloque el nombre de la tercera persona');

if(edad1>edad2 && edad1>edad3){
    document.write(nombre1 +'es el mayor');
}else if (edad2>edad1 && edad2>edad3){
    document.write(nombre2 + 'es el mayor');
}else if (edad3>edad1 && edad3>edad2){
    document.write(nombre3 + 'es el mayor');
}

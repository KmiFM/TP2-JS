/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/

let numero = parseInt(prompt('Ingrese un numero'));

if(Number(numero) == numero ){
    if (numero >0 && numero <=50){
        let rep, i;
        for (i=1; i <= numero; i++){
          for(repeticion=1;repeticion<=i;repeticion++){
            document.write(repeticion);
          }
          document.write('<br>');
        }
    }
    else{
        alert('El valor introducido es mayor a 50, no es válida')
    }
}
else{
    alert('eso no es un numero xd');
}
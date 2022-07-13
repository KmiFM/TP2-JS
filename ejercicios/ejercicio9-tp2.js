/*9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10
*/

let numero = parseInt(prompt('Ingrese un numero'));

if(Number(numero) == numero ){
    if (numero >0 && numero <=500){
        let rep, i;
        for (i=1; i <= numero; i++){
          for(repeticion=i;repeticion<=i;repeticion++){
            document.write(repeticion);
          }
          document.write('<br>');
        }
    }
    else{
        alert('El valor introducido es mayor a 500, no es válida')
    }
}
else{
    alert('eso no es un numero xd');
}
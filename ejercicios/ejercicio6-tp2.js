/*6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….
*/


var i, repeticion;
for(i=1; i<=30; i++){
    for(repeticion =0; repeticion <i; repeticion++){
    document.write(i);
    }
 document.write('<br>');
}
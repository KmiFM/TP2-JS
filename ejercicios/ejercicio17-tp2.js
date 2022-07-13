//17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

let texto = prompt ('Ingresá tu texto');

if ((texto=='a')||(texto=='e')||(texto=='i')||(texto=='o')||(texto=='u')){
    document.write(texto.charAt(0));
}
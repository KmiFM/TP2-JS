// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp



do{    
let texto=prompt('Ingrese sus notas aqui:');
console.log(texto);
}while(confirm('Desea seguir agregando notas?'));{
    document.write(texto + '-' + texto + '-' +texto);
}




// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

let texto = "";

do {
    
    let cadena = prompt("Ingrese sus notas aqui");
    
    if (texto == "") {
       
        texto = texto + cadena;
    }
    
    else {
        
        texto = texto + "-" + cadena;
    }
   
} while (confirm("Desea seguir anotando?"));

document.write(texto);
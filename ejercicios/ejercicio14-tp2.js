//14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

let cadena = prompt("Introduce una texto:");
    let numchar = cadena.length;    
    let caracter;
    let x;
    for (x = 0; x < numchar; x++) {
	caracter = cadena.charAt(x);    
	if (x == numchar - 1) {
		document.write(caracter);
	}
	else {
		document.write(caracter + "-");
	}
    }
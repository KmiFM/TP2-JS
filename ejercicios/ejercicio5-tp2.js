//ingresar un dni debe ser entre 0 y 99999999
//calcular el resto de la division entera entre el numero y el numero 23
//el resultado 0 a 22, corresponde a una de las siguientes letras (t,r,w,a,g,m,y,f,p,d,x,b,n,j,z,s,q,v,h,l,c,k,e)
//si el dni cargado no es un numero mostrar con un alert
//repetir todo el proceso hasta que el usuario presione cancelar
console.log(confirm('desea ingresar un dni?'));

do{
    let numero=parseInt(prompt('ingrese un numero de dni entre (0 y 99999999)'));
console.log(numero);
if()
    
}


let resultado = numero % 23;
console.log(resultado);
switch(resultado){
    case 0:
        document.write('la letra que corresponde a su dni es la T, DNI ingresado:' +numero);
        break;
        case 1:
        document.write('la letra que corresponde a su dni es la r, DNI ingresado:' +numero);
        break;
        case 2:
        document.write('la letra que corresponde a su dni es la w, DNI ingresado:' +numero);
        break;
        case 3:
        document.write('la letra que corresponde a su dni es la a, DNI ingresado:' +numero);
        break;
        case 4:
        document.write('la letra que corresponde a su dni es la T, DNI ingresado:' +numero);
        break;
        case 4:
        document.write('la letra que corresponde a su dni es la g, DNI ingresado:' +numero);
        break;
        case 5:
        document.write('la letra que corresponde a su dni es la m, DNI ingresado:' +numero);
        break;
        case 6:
        document.write('la letra que corresponde a su dni es la y, DNI ingresado:' +numero);
        break;
        case 7:
        document.write('la letra que corresponde a su dni es la p, DNI ingresado:' +numero);
        break;
        case 8:
        document.write('la letra que corresponde a su dni es la d, DNI ingresado:' +numero);
        break;case 9:
        document.write('la letra que corresponde a su dni es la x, DNI ingresado:' +numero);
        break;
        case 10:
        document.write('la letra que corresponde a su dni es la b, DNI ingresado:' +numero);
        break;
        case 11:
        document.write('la letra que corresponde a su dni es la n, DNI ingresado:' +numero);
        break;
        case 12:
        document.write('la letra que corresponde a su dni es la j, DNI ingresado:' +numero);
        break;
        case 13:
        document.write('la letra que corresponde a su dni es la z, DNI ingresado:' +numero);
        break;
        case 14:
        document.write('la letra que corresponde a su dni es la s, DNI ingresado:' +numero);
        break;
        case 15:
        document.write('la letra que corresponde a su dni es la q, DNI ingresado:' +numero);
        break;
        case 16:
        document.write('la letra que corresponde a su dni es la v, DNI ingresado:' +numero);
        break;
        case 17:
        document.write('la letra que corresponde a su dni es la h, DNI ingresado:' +numero);
        break;
        case 18:
        document.write('la letra que corresponde a su dni es la l, DNI ingresado:' +numero);
        break;
        case 19:
        document.write('la letra que corresponde a su dni es la c, DNI ingresado:' +numero);
        break;
        case 20:
        document.write('la letra que corresponde a su dni es la k, DNI ingresado:' +numero);
        break;case 21:
        document.write('la letra que corresponde a su dni es la e, DNI ingresado:' +numero);
        break;
        default:
    alert("ingresaste una opcion erronea");
}else{
    alert('ingresaste un valor erroneo');
}
/*4- condicionales
if(condicion){
    bloque de instrucciones
}else{
    bloque de instrucciones
}

else if(condicion){
    bloque de instrucciones
}

switch(condicion){
    bloque de instrucciones
}

Operadorres de asignacion compuestos
Nombre  Operador   Abreviado    Significado
asignacion x = y     x =y
asicnacion de adicion x += y   x = x + y
asignacion de resta x -= y  x = x - y
asignacion de multiplicacion x *= y  x = x * y
asignacion de division x /= y x = x / y
asignacion de residuo x %= y  x = x % y
Asignacion de exponenciacion x **= y x = x ** y
asignacion de desplazamiento a la izquierda x <<= y x = x << y
asiignacion de desplazamiento a la derecha x >>>= y x = x >>> y
asignacion AND bit a bit    x &= y  x = x & y
asignacion XOR bit a bit    x ^= y  x = x ^ y
asignacion OR bit a bit     x |= y  x = x | y
asignacion AND logico       x &&= y  x && (x = y)
asignacion OR logico        x || y x || (x = y)
asignacion de anulacion logica x ??= y x ?? (x = y)
*/

//condicional if else y else if
var numero = 8;
 if(numero>10){
    alert('el numero es: '+numero);
 }
 
 else if(numero == 10){
    alert('el numero es: '+numero);
 }
 
 else{
    alert('el numero es: '+numero);
 }

//condicional switch

var edad = 800;
var imprimir = "";

switch(edad){
    case 18:
        imprimir = "eres menor de edad";
        break;
    case 50:
        imprimir = "eres adulto bro, jubilate";
        break;
    case 80:
        imprimir = "Bro sos un ancestro";
        break;
    default:
        imprimir = "Tienes otra edad bro";
}

document.write(imprimir);
/* Ejercicios 
Mostrar todos los numeros que hay entre dos numero ingresados por el usuario
*/

'use strict'

var nr1 = parseInt(prompt('Ingrese el nro desde: '));
var nr2 = parseInt(prompt('Ingrese el nro hasta: '));

document.write("<h1>De "+nr1+" a "+nr2+" estan los siguientes numeros</h1>")
for(var i = nr1; i<=nr2; i++){
    document.write('<h3>'+i+'</h3>', '<br>')
}
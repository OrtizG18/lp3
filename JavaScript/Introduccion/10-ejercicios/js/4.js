/* Ejercicios 
Mostrar todos los numeros que son pares e impares entre dos numeros ingresados por el usuario
*/

'use strict'

var nr1 = parseInt(prompt('Ingrese el 1er valor'));
var nr2 = parseInt(prompt('Ingrese el 1do valor'));

while(nr1<nr2){
    nr1++;
    if(nr1 %2 != 0){
        document.write(nr1, ' es impar<br>');
    }
    else if(nr1%2 == 0){
        document.write(nr1, ' es par<br>');
    }
}
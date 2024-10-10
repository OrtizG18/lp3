/* Ejercicios 
Utilizar un bucle y mostrar las medidas y el promedio de un usuario hasta que el usuario ingrese un numero negativo
*/

var suma = 0;
cont = 0;

do{
    var num = parseInt(prompt('Ingrese numeros hasta que ingrese un negativo', 0));
    if(cont == 3){
        alert('Si quiere parar ingrese un valor negativo');
    }
    if(isNaN(num)){
        num = 0;
    }else if(num >= 0){
        suma = suma + num;
        cont++
    }
}while(num>=0){
    alert('La suma es: '+suma);
    alert('El promedio es: '+suma/cont);
}

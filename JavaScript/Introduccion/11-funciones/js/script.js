/* funciones 
conjunto de instrucciones que se ejecutan cuando se las llaman
*/

//definir una funcion
function calculadora(){
    var mensaje = alert('hola soy una funcion XDD, me tenes que llamar para que funcione');
}

//llamar a una funcion
calculadora();

//funcion donde se pide ingresar un valor
function calcular(n1, n2, mostrar = false){
    if(mostrar == false){
        alert('Tenes que activarme con true');
    }else{
        var suma = n1+n2;
        return suma;
    }
}

var nr1 = parseInt(prompt('Ingrese el valor 1'));
var nr2 = parseInt(prompt('Ingrese el valor 2'));
var mostrar = prompt('mostrar');

alert(calcular(nr1, nr2, mostrar));
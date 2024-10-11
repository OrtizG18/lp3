/*ejercicios arrays*/
'use strict'
/*
crear un programa que: 
1- pida 6 numeros ingresados por pantalla
2- Mostrar el array entero en el cuerpo de la pagina y consola
3- Mostrar array ordenado
4- invertir el orden de un array
5- mostrar cuantos elementos tiene un array
6- buscar un valor introducido por el usuario y que nos muestre tambien su indice
*/

//crear funcion para imprimir los resultados en el cuerpo de la pagina
function mostrararray(elementos, texto = ""){
    document.write("<hr><h1>Contenido del array "+texto+"</h1>");
    var resultado = numeros.forEach((elementos, indice)=>{
        document.write("<ul>");
        document.write("<li>"+elementos+"</li>");
        document.write("</ul>");
    });
}

/*1- pida 6 numeros ingresados por pantalla
2- Mostrar el array entero en el cuerpo de la pagina y consola*/
var numeros = new Array(6);

for(var i = 0; i<numeros.length; i++){
    numeros[i] = parseInt(prompt("Introduce numeros: "));
}
document.write("<h1>Contenido del array: </h1>");
var resultado = numeros.forEach((valores)=>{
    document.write("<ul>");
    document.write("<li>"+valores+"</li>");
    document.write("</ul>");
});

console.log(numeros);

//3- Mostrar array ordenado
var resultorden = numeros.sort(function(a, b){return a - b});
document.write("<hr><h1>Muestra los numero en orden</h1>")
document.write(resultorden);
console.log(resultorden);

//4- invertir el orden de un array
numeros.reverse();
//utilizar funcion creada anteriormente
mostrararray(numeros, "En orden invertido: ");

//5- mostrar cuantos elementos tiene un array
document.write("<h1>El array tiene "+numeros.length+" elementos</h1>");

//6- buscar un valor introducido por el usuario y que nos muestre tambien su indice
var busqueda = parseInt(prompt("Ingrese el numero que desea buscar: ", 0));
var posicion = numeros.findIndex(numeros => numeros == busqueda);
var valor = numeros.find(numeros => numeros == busqueda);
if(posicion && posicion != -1){
    document.write("El valor es "+valor+" y se encuentra en el indice: "+posicion);
}else{
    document.write("<h1>El numero buscado no se encuentra en ningun indice</h1>");
    alert("El numero que se busco no se ha encontrado");
}
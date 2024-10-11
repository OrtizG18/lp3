/*arrays - arreglos*/

'use strict'

//variable normal
var nombre = "Carlos Ortiz";
//Definicion de un array
var nombres = ["Charlie garcia", "Leon Gieco", "Gustavo Cerati", "Carlos Spinetta", 52, true];
//Otra forma de establecer un array
var lenguajes = new Array("Java", "php", "Javascript", "HTML", "Python");

console.log(nombres);
console.log(lenguajes);

//acceder a los elementos del array
console.log("El lenguaje nro 2 es: "+ lenguajes[2]);

//imprimir un elemento ingresando el numero de indice
var seleccion = parseInt(prompt("Que lenguaje seleccionaras?", 0));

if(seleccion>=lenguajes.length){
    alert("Ingrese un valor valido, por favor seleccione un valor entre 0 a 4"+lenguajes.length);
}else{
    alert("El lenguaje seleccionado es: "+lenguajes[seleccion]);
}

//recorrer un array
//1- for
document.write("<h1>Imprimir elementos con for</h1>");
document.write("<ul>");
for(var i = 0; i<lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}
document.write("</ul>");

//2- forEach (recomendada)
document.write("<h1>Imprimir elementos con for each</h1>");
document.write("<ul>");
lenguajes.forEach((elemento, indice, array)=>{
    console.log(elemento);
    console.log(indice);
    console.log(array);
    document.write("<li>"+"El indice y el elemento es: "+indice+" = "+elemento+"</li>");
});
document.write("</ul>");

//3- recorrer con forIn
document.write("<h1>Imprimir elementos con for in</h1>");
document.write("<ul>");
for(let lenguaje in lenguajes){
    document.write("<li>"+"El lenguaje es: "+lenguajes[lenguaje]+"</li>");
}
document.write("</ul>");
/*Arrays busqueda*/

'use strict'

var lenguajes = ["Javascript", "Java", "php", "c++", "Python"];

//1- find
var buscafind = lenguajes.find(lenguajes => lenguajes == "Java");
console.log(buscafind);

//2- findindex
var buscaindex = lenguajes.findIndex(lenguajes => lenguajes == "php");
console.log(buscaindex);

//3- busqueda de valores numericos con some (devuelve true o false)
var numeros = [10, 20, 30, 40, 50];
var buscanumeros = numeros.some(numeros => numeros >= 30);
console.log(buscanumeros);
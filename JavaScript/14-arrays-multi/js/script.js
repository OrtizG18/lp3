/*Arrays o arreglos multidimencionales*/
'use strict'

var categorias = ["Terror", "Suspenso", "Accion", "Fantacia", "Comedia"];
var peliculas = ["It", "El conjuro", "Rapidos y furiosos", "Harry potter", "Que paso ayer?"];

var cine = [categorias, peliculas];
console.log(cine[0][1]);
console.log(cine[1][2]);

//1- operaciones con array
//1.2- añadir elementos (push)
peliculas.push("Batman");
console.log(peliculas);

//1.3- quitar elementos (pop)
peliculas.pop();
console.log(peliculas);

//1.4- añadir elementos con el prompt
var elemento = "";

do{
    elemento=prompt("Introduce una peli: ");
    peliculas.push(elemento);
}while(elemento != "PARAR");

//1.4.1- recorrer array y mostrar valores en pantalla
peliculas.forEach((pelis)=>{document.write("Las pelis disponnibles son: "+pelis+"<br>")});

//2- Covertir array en texto
var pelistring = peliculas.join();
console.log(typeof(pelistring), pelistring);

//3- convertir texto a array
var cadena = "txt1, txt2, txt3, txt4, txt5";
console.log(cadena.split());

//4- ordenar array en orden alfabetico (sort)
categorias.sort();
console.log(categorias);

//5- invertir orden (reverse)
peliculas.reverse();
console.log(peliculas);
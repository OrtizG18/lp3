/*1-variables */
//2-'use strict' //esto es para que el lenguaje sea mas sencible a fallos

//3-variables de tipo cadena
var pais = "<h1>Paraguay</h1>";
var continente = '<h1>'+'America'+'</h1>';
//concatenar
var p_c = pais + '-' + continente;

console.log(p_c);
document.write(pais+"<hr>");
document.write(continente);


//2 Modo estricto 
//*use strict*
//4-Let permite definir variables limitando su alcance
//5-Var permite definir variables y utilizarlas globalmente
let varlet = "Esto es una variable let";
document.write("<br>"+varlet);

//6-constantes es una variable que no puede cambiar de valor
// y se define con la palabra const

var web="https://www.utic.edu.py";
console.log(web);

const constweb = "https://www.utic.edu.py";
constweb = "otra pagina";
console.log(constweb);




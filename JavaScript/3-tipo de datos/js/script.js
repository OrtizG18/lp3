/*3- Tipos de datos*/
//numericos

var nro1 = 50;
var nro2 = 25;
//operadores
var suma = nro1+nro2;
var resta = nro1-nro2;
var multi = nro1*nro2;
var divi = nro1/nro2;
var porce = nro1%nro2;
var decimal = 25.5;
var verdadero = true;
var falso = false; 

var texto = "El resultado de la operacion es: ";
document.write(texto, suma, "<br>");
document.write(texto, resta, "<br>");
document.write(texto, multi, "<br>");
document.write(texto, divi, "<br>");
document.write(texto, porce, "<br>");
document.write(texto, decimal, "<br>");
document.write(texto, verdadero, " "+falso, "<br>");

//funciones para convertir datos
document.write("<hr>");
document.write("<h1>Funciones para convertir datos</h1>");

var numerico = '30';
document.write(numerico);
var tipodatostring = typeof(numerico);
document.write(tipodatostring, "<br>");
//convertir string a numero
var numerico_converito = Number(numerico);
document.write(numerico_converito);
//ver tipo de dato
var tipodato = typeof(numerico_converito);
document.write(tipodato, "<br>");

//convertir numero a string
var nroent = 40;
var convertidostring = String(nroent, "<br>");
var tipostring = typeof(convertidostring);
document.write(convertidostring, tipostring);

//parseint
var nrostring = '100';
var parse = parseInt(nrostring);
document.write("<br>El numero parseado es: "+parse);
console.log(typeof(parse));
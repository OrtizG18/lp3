/* funciones predeterminadas en js
*/

//funciones para transformar texto
var numero = 888;
var txt1 = "Bienvenidos al curso de javascript";
var txt2 = "EXAMPLE TEXT";

//1- transformar de numero a string
var nroconvertido = numero.toString;
console.log(nroconvertido);
console.log(typeof(numeroconvertido));

//2- cambiar valores de minus a mayus
var txt1MAYUS = txt1.toUpperCase;
console.log(txt1MAYUS);

//3- Cambiar valores de mayus a minus
var txt2minus = txt2.toLowerCase;
console.log(txt2minus);

//4- longitud de un string
var longitud = "Carlos Ortiz";
console.log(longitud.length);

//5- concatenar
console.log(txt1+txt2);

//6- arrays - longitud
var array = ["Hola", "Como", "Estas?"];
console.log(array.length);

//7- buscar el indice
var busqueda = txt1.indexOf("curso");
console.log(busqueda);

//8- buscar el indice 2
var busqueda2 = txt1.lastIndexOf("de");
console.log(busqueda2);

//9- buscar el indice 3
var busqueda3 = txt1.search("javascript");
console.log(busqueda3);

//10- match
var busqueda4 = txt1.match("al");
console.log(busqueda4);

//11- quitar espacios de adelante o de atras
var sustraerespacios = txt1.substr(14, 6);
console.log(sustraerespacios);

//12- quitar letras
var quitar = txt1.charAt(2);
console.log(quitar);

//13- busqueda con starswitch cuando las palabras inicien con un valor esto devuelve true o false
var busqueda5 = txt1.startsWith("Bienve");
console.log(busqueda5);

//14- include
var busqueda6 = txt1.includes("javascript");
console.log(busqueda6);

//15- reemplazar una palabra por otra
var reemplazar = txt1.replace("javascript", "JavaScript");
console.log(reemplazar);

//16- borrar una parte y devolver el valor indicado
var borrarparte = txt1.slice(12, 20);
console.log(borrarparte);

//17- split (convertir texto en array)
var textarray = txt1.split();
var textarray = txt1.split(" ");
console.log(textarray);

//18- quitar espacios con trim
var quitarespacios = txt1.trim();
console.log(quitarespacios);

//19- uso de plantillas
var nombre = prompt("Ingrese el nombre: ");
var apellido = prompt("Ingrese su apellido: ");
//alt+96 ``
var plantilla = `
<h1>Hola mina xd</h1>
<h3>El nombre es: ${nombre}</h3>
<h3>El apellido es: ${apellido}</h3>
`;

document.write(plantilla);
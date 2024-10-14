/*DOM
Document object model
El DOM se aplica a las etiquetas HTML mediante el atributo id
En el caso de utilizar DOM las etiquetas HTML <script> se inicializaron antes de
finalizar el body
*/

//1- ingresar el elemento por su id
//var caja = document.getElementById("micaja").innerHTML = ("Texto cambiado con DOM");
//console.log(caja);

'use strict'

function cambiarcolor(color, color2){
    caja.style.background = color;
    otraforma.style.background = color2;
}

//seleccionar mediante id
var caja = document.getElementById("micaja");
caja.innerHTML = "Texto cambiado por 2da vez";
caja.style.background = "grey";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "cajita";
console.log(caja);

//seleccionar por querySelector
var otraforma = document.querySelector("#micaja2");
otraforma.style.color = "grey";
console.log(otraforma);

//seleccionar elementos por etiquetas
var todoslosdiv = document.getElementsByTagName('div');
var valordivselect = todoslosdiv[2].textContent;
console.log(valordivselect);

var cambiarseleccionado = todoslosdiv[2];
cambiarseleccionado.style.background = "darkgrey";

//recorrer todos los div con for in
var tododiv = document.getElementsByTagName('div');
var valor;
for(valor in tododiv){
    if(typeof tododiv[valor].textContent == 'string'){
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(tododiv[valor].textContent);
    parrafo.append(texto);
    //console.log(parrafo);
    document.querySelector("#miseccion").append(parrafo);
    }
}

//como llamar a elementos por su clase
var divclase = document.getElementsByClassName('miclase');
divclase[0].style.background = "darkred";
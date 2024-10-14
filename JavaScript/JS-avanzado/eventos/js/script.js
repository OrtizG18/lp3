/*Eventos
son funciones que se ejecutan cada vez que se realiza cierta accion
ej.: movimientos del raton, teclado, borrar, etc.
*/

//corregir llamar en las etiquetas correspondientes al script.js
window.addEventListener('load', () => {

//1
var boton2 = document.querySelector("#btn2");
//2
function cambiarcolor(){
    var bg = boton2.style.background;
    if(bg == "darkred"){
        boton2.style.background = "darkgrey";
    }else{
        boton2.style.background = "grey";
    }
}

//3- evento click
var boton3 = document.querySelector("#btn3");
boton3.addEventListener('click', function(){
    cambiarcolor();
});

//4- Evento mouse over
boton3.addEventListener('mouseover', function(){
    boton3.style.background = "grey";
});

//5- evento mouse out
boton3.addEventListener('mouseout', function(){
    boton3.style.background = "darkgrey";
})

//6- evento focus
var input = document.querySelector("#nombre");
input.addEventListener('focus', function(){
    console.log("Bro estas haciendo focus al campo de input");
});

//7- evento blur
input.addEventListener('blur', function(){
    console.log("Bro estas fuera del input");
});

//8- key down al escribir dentro de un input
input.addEventListener('keydown', function(event){
    console.log("Bro estas pulsando la tecla", String.fromCharCode(event.keyCode));
});

//9- keypress
input.addEventListener('keypress', function(event){
    console.log("Bro estas precionando las teclas pero con keypress", String.fromCharCode(event.keyCode));
});

//10- keyup
input.addEventListener('keyup', function(event){
    console.log("Bro soltaste la tecla", String.fromCharCode(event.keyCode));
});

});//fin del load
/*BOM
browser object model
sirve para manipular el navegador y obtener datos
*/

//1- Tamaño ancho de la ventana del navegador
console.log(window.innerWidth, "Ancho de la pagina");

//2- Alto del navegador
console.log(window.innerHeight, "Alto de la pagina");

//3- crear una funcion para traer el ancho y el largo del navegador
function traerbom(ancho, largo){
    var ancho = console.log(window.innerWidth, "Ancho de la pagina con una funcion");
    var largo = console.log(window.innerHeight, "Largo de la pagina con una funcion");
}

traerbom();

//4- traer el tamaño real del monitor o dispositivo
console.log(screen.width, "Ancho de la pantalla");
console.log(screen.height, "Alto de la pantalla");

//5- traer url
console.log(window.location, "Este es la url en donde estas ahora");

//6- funcion para redireccionar a otra url
function redirect(url){
    window.location.href = url;
}
redirect(url);

//7- abrir otra ventana del navegador
function abrirventana(url){
    window.open(url, "", "width = 800, height = 400");
}
abrirventana(url);

//
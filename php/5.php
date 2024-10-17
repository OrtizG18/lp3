<h1>funciones</h1>
<?php
/*
function nombredelafuncion(parametros){
    instrucciones de codigo
}
*/

function holamundo(){
    echo "hola mundo desde una funcion";
}
holamundo();//llamar a la funcion (siempre se le llama fuera del bloque de instrucciones)

echo"<h1>funciones pasandole argumentos</h1>";
function nombrefamiliar($nombre){
    echo "El nombre del familiar es: <strong>$nombre</strong> <br>";
}
//utilizar o llamar a la funcion
nombrefamiliar("Carlos");
nombrefamiliar("Cesarito");
nombrefamiliar("Cristian");
nombrefamiliar("Francisco");

echo"<h1>funciones pasandole 2 argumentos</h1>";
function nombreaño($vnombre, $año){
    echo "El nombre es: $vnombre y su año de nacimiento es: $año<br>";
}
nombreaño("Carlitos", "2004");
nombreaño("Cristina", "1994");
nombreaño("Laura", "2005");
nombreaño("Cristaldo", "2008");

echo"<h1>funcion de suma de valores</h1>";
function sumavalores(int $nr1, int $nr2){
    return $nr1 + $nr2;
}
echo "El resultado de la suma es: ".sumavalores(15, 15);
?>
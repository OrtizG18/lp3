<h1>Estructura for</h1>
<?php
/*
for (variable iteradora; condicion variable; variable++){
    bloque de instrucciones
}
*/

for($i = 0; $i <= 10; $i++){
    echo "El numero es: $i <br>";
}

echo "<h1>Estructura Foreach para recorrer matrices</h1>";
$colores = array("rojo", "verde", "azul", "amarillo");

foreach($colores as $valores){
    echo "$valores <br>";
}

echo "<h1>Estructura Foreach para recorrer matrices con indice de datos</h1>";
$año = array("Pedro"=>"35", "Juan"=>"37","Maria"=>"28");
foreach($año as $nombre => $edad){
    echo "El nombre es $nombre tiene $edad años <br>";
}

echo "<h1>Estructura Break para parar la ejecucion</h1>";
for($a = 0; $a < 10; $a++){
    if($a == 5){
        break;
    }
    echo "El numero es: $a <br>";
}

echo "<h1>Estructura continua para parar la ejecucion</h1>";
for($b = 0; $b <= 10; $b++){
    if($b == 5){
        continue;
    }
    echo "El numero es: $b <br>";
}
?>
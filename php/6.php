<h1>Arrays</h1>
<?php
$autos = array("Volvo", "Toyota", "Kia");
echo "tengo un: ".$autos[0], ", ".$autos[1], " y ".$autos[2];

echo "<h2>Recorrer un array con foreach y traer el valor del mismo</h2>";
foreach($autos as $auto){
    echo $auto, "<br>";
}

echo "<h2>Recorrer un array con foreach y traer el valor del mismo</h2>";
foreach($autos as $index => $auto){
    echo "El indice es: ".$index, " y la marca es: ".$auto, "<br>";
}

echo "<h1>Bidimencionales</h1>";
$autito = array(
    array("Volvo", 28, 12),
    array("Toyota", 35, 20),
    array("Kia", 30, 25),
    array("Nissan", 38, 28)
);
echo $autito[0][0], ": En stock: ".$autito[0][1], " El saldo es: ".$autito[0][2], "<br>";
echo $autito[1][0], ": En stock: ".$autito[1][1], " El saldo es: ".$autito[1][2], "<br>";
echo $autito[2][0], ": En stock: ".$autito[2][1], " El saldo es: ".$autito[2][2], "<br>";
echo $autito[3][0], ": En stock: ".$autito[3][1], " El saldo es: ".$autito[3][2], "<br>";
?>
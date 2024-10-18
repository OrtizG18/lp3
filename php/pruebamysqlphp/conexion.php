<?php
/*conexion php con mysql*/
//crear variables del servidor de bd
$vhost = 'localhost';
$vuser = 'root';
$vpass = '';
$vbd = 'pruebamysqlphp';
$conexion = mysqli_connect($vhost, $vuser, $vpass, $vbd);

if(mysqli_connect_errno()){
    echo 'la conexion a la base de datos no se pudo establecer, mirar el error '.mysqli_connect_error();
}else{
    //echo "La conexion a $vbd fue exitosa";
}
?>
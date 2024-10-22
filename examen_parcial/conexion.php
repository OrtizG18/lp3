<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "dbparcial";

// Crear la conexión con MySQLi
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>
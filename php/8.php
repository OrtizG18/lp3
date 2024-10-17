<h1>Procesar formulario dentro de un mismo archivo con get</h1>
<body>
  <form method="GET" action="<?php echo $_SERVER['PHP_SELF']; ?>">
    Nombre: <input type="text" name="nombre">
    <input type="submit">
  </form>

<?php
  if($_SERVER['REQUEST_METHOD'] == "GET"){
    $nombre = $_GET['nombre'];
    if(empty($nombre)){
      echo "¡Escriba un nombre!";
    } else {
      echo "El nombre ingresado es: $nombre";
    }
  }
?>
</body>

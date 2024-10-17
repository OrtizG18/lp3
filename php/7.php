<h1>Procesar formulario dentro de un mismo archivo</h1>
<body>
  <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
    Nombre: <input type="text" name="nombre">
    <input type="submit">
  </form>

<?php
  if($_SERVER['REQUEST_METHOD'] == "POST"){
    $nombre = $_REQUEST['nombre'];
    if(empty($nombre)){
      echo "¡Escriba un nombre!";
    } else {
      echo "El nombre ingresado es: $nombre";
    }
  }
?>
</body>

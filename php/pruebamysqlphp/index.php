<?php include "conexion.php"; ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Formulario php/mysql</title>
</head>
<body>
    <h1>formulario para procesar con php y mysql</h1>
        <form action="procesar.php" method = "post">
            <label for="nombre">Nombre</label><br>
            <input type="text" id = "nombre" name = "nombre"><br>
            <label for="apellido">Apellido</label><br>
            <input type="text" id = "apellido" name = "apellido"><br>
            <input type="submit" id = "insertar" name = "insertar"><br>
        </form>
        <hr>
        <h1>Mostrar los datos de la base de datos</h1>
        <table border = "1">
            <tr>
                <th>id</th>
                <th>Nombre</th>
                <th>Apellido</th>
            </tr>
            <?php 
                mysqli_query($conexion, "SET NAMES 'utf8'");//codificar a utf8
                //crear consulta
                $query = mysqli_query($conexion,"SELECT *FROM persona");
                //recorrer el resultado para capturar los valores
                while($resultado = mysqli_fetch_assoc($query)){
                    //var_dump($resultado);
                    $id = $resultado['id'];
                    $nombre = $resultado['nombre'];
                    $apellido = $resultado['apellido'];?>
                <tr>
                        <td><?=$id;?></td>
                        <td><?=$nombre;?></td>
                        <td><?=$apellido;?></td>
                </tr>
            <?php }?>
        </table>
        <hr>
        <h1>Editar datos</h1>
        <form method="GET">
            <label for="id">ingrese el id a modificar</label><br>
            <input type="text" name="id"><br>
            <input type="submit" value="ENVIAR">
        </form>
        <?php 
            if(isset($_GET['id'])){
                $id = $_GET['id'];
                $query = mysqli_query($conexion, "SELECT *FROM persona WHERE id = $id");
                while($resultado = mysqli_fetch_assoc($query)){
                    $id = $resultado['id'];
                    $nombre = $resultado['nombre'];
                    $apellido = $resultado['apellido'];
                }
            }else{
                $id = "";
                $nombre = "";
                $apellido = "";
            }
        ?>
        <hr>
        <form action="procesar.php" method="post">
            <label for="id">ID</label><br>
            <input type="text" id = "id" name = "id" value="<?=$id;?>"><br>
            <label for="nombre">Nombre</label><br>
            <input type="text" id = "nombre" name = "nombre" value="<?=$nombre;?>"><br>
            <label for="apellido">Apellido</label><br>
            <input type="text" id = "apellido" name = "apellido" value="<?=$apellido;?>"><br>
            <input type="submit" id = "Editar" name = "Editar"><br>
        </form>
        <hr>
        <h1>Borrar datos</h1>
        <form action="procesar.php" method="POST">
        <label for="id">Ingrese el id que deseas eliminar</label><br>
        <input type="text" name="id" autocomplete=off>
        <input type="submit" name="Borrar" value="Borrar">
    </form>
</body>
</html>
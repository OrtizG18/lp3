<?php
session_start(); // Iniciar la sesión
include 'conexion.php';

// Cargar los datos del contacto si se está editando
$editar = false;
$nombre = '';
$mensaje = '';
$id = 0;

if (isset($_POST['editar'])) {
    $id = (int)$_POST['id']; // Asegurarse de que ID sea un entero válido
    $sql = "SELECT * FROM contactos WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $nombre = $row['nombre'];
        $mensaje = $row['mensaje'];
        $editar = true; // Indicar que estamos en modo edición
    }
    $stmt->close();
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario contacto</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="index.php">Inicio</a></li>
                <li><a href="contactos.php">Contactos</a></li>
            </ul>
        </nav>
    </header>

    <?php
    // Mostrar mensaje de sesión
    if (isset($_SESSION['message'])) {
        $messageType = $_SESSION['message_type'] ?? 'success'; // Por defecto, éxito
        echo "<div class='alert $messageType'>" . $_SESSION['message'] . "</div>";
        unset($_SESSION['message'], $_SESSION['message_type']); // Limpiar el mensaje después de mostrarlo
    }
    
    ?>

    <section class="contact-form">
        <h1><?php echo $editar ? "Modificar mensaje" : "Enviar un mensaje"; ?></h1>
        <form action="procesar.php" method="POST">
            <input type="hidden" id="id" name="id" value="<?php echo $id; ?>"> <!-- Este ID es crítico para la modificación -->
        
            <div class="input-group">
                <label for="name">Nombre:</label>
                <input type="text" id="name" name="name" value="<?php echo $nombre; ?>" required>
            </div>
            <div class="input-group">
                <label for="message">Mensaje:</label>
                <textarea id="message" name="message" required><?php echo $mensaje; ?></textarea>
            </div>
            <button type="submit" name="<?php echo $editar ? "modificar" : "guardar"; ?>">
                <?php echo $editar ? "Modificar" : "Guardar"; ?>
            </button>
        </form>
    </section>


    <!-- Listado de contactos -->
    <section class="contact-list">
        <h2>Lista de Contactos</h2>
        <table>
            <tr>
                <th>Nombre</th>
                <th>Mensaje</th>
                <th>Acciones</th>
            </tr>

            <?php
    // LISTAR CONTACTOS
    $sql = "SELECT * FROM contactos";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo "<tr>";
            echo "<td>" . htmlspecialchars($row['nombre']) . "</td>";
            echo "<td>" . htmlspecialchars($row['mensaje']) . "</td>";
            echo "<td>
                    <form class='editar' style='display:inline;' method='POST' action='contactos.php'>
                        <input type='hidden' name='id' value='" . htmlspecialchars($row['id']) . "'>
                        <button type='submit' name='editar' class='editar'>Editar</button> <!-- Cambiado a botón -->
                    </form>
                    <form class='borrar' style='display:inline;' method='POST' action='procesar.php'>
                        <input type='hidden' name='id' value='" . htmlspecialchars($row['id']) . "'>
                        <button type='submit' name='eliminar' class='eliminar'>Eliminar</button> <!-- Cambiado a botón -->
                    </form>
                </td>";
            echo "</tr>";
        }
    } else {
        echo "<tr><td colspan='3'>No se encontraron contactos.</td></tr>";
    }

    $conn->close();
    ?>

        </table>
    </section>

    <footer>
        <p>Desarrollado por Carlos Ortiz - Contacto: 0976524098</p>
        <p><a href="https://www.instagram.com/thatonekiidcarlos/">Sígueme en Instagram</a></p>
    </footer>
</body>
</html>

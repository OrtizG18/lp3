<?php
session_start(); // Iniciar la sesión
include 'conexion.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // INSERTAR DATOS
    if (isset($_POST['guardar'])) {
        $name = $conn->real_escape_string($_POST['name']);
        $message = $conn->real_escape_string($_POST['message']);

        if (!empty($name) && !empty($message)) {
            $stmt = $conn->prepare("INSERT INTO contactos (nombre, mensaje) VALUES (?, ?)");
            $stmt->bind_param("ss", $name, $message);

            if ($stmt->execute()) {
                $_SESSION['message'] = "Datos guardados correctamente.";
                $_SESSION['message_type'] = 'success';
            } else {
                $_SESSION['message'] = "Error al guardar los datos: " . $stmt->error;
                $_SESSION['message_type'] = 'error';
            }

            $stmt->close();
            header("Location: contactos.php");
            exit;
        }
    }

    // MODIFICAR DATOS
    if (isset($_POST['modificar'])) {
        $id = (int)$_POST['id']; // Asegúrate de que ID sea un entero
        $nombre = $conn->real_escape_string($_POST['name']);
        $mensaje = $conn->real_escape_string($_POST['message']);

        $stmt = $conn->prepare("UPDATE contactos SET nombre = ?, mensaje = ? WHERE id = ?");
        $stmt->bind_param("ssi", $nombre, $mensaje, $id);

        if ($stmt->execute()) {
            $_SESSION['message'] = "Datos modificados correctamente.";
            $_SESSION['message_type'] = 'success';
        } else {
            $_SESSION['message'] = "Error al modificar los datos: " . $stmt->error;
            $_SESSION['message_type'] = 'error';
        }

        $stmt->close();
        header("Location: contactos.php");
        exit;
    }

    // ELIMINAR DATOS
    if (isset($_POST['eliminar'])) {
        $id = (int)$_POST['id'];

        $stmt = $conn->prepare("DELETE FROM contactos WHERE id = ?");
        $stmt->bind_param("i", $id);

        if ($stmt->execute()) {
            $_SESSION['message'] = "Dato eliminado correctamente.";
            $_SESSION['message_type'] = 'success';
        } else {
            $_SESSION['message'] = "Error al eliminar los datos: " . $stmt->error;
            $_SESSION['message_type'] = 'error';
        }

        $stmt->close();
        header("Location: contactos.php");
        exit;
    }
}

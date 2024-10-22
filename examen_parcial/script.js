document.addEventListener('DOMContentLoaded', function() {
    // Obtener los campos de nombre y mensaje
    const nameField = document.getElementById('name');
    const messageField = document.getElementById('message');

    // Validar en tiempo real que el campo nombre no tenga números y no esté vacío
    nameField.addEventListener('input', function() {
        const namePattern = /^[a-zA-Z\s]+$/; // Expresión regular para solo letras y espacios
        
        if (!namePattern.test(this.value)) {
            this.setCustomValidity("El nombre solo puede contener letras y espacios.");
        } else if (this.value.trim() === "") {
            this.setCustomValidity("El campo nombre no puede estar vacío.");
        } else {
            this.setCustomValidity(""); // Borrar el mensaje si todo está correcto
        }
    });

    // Validar en tiempo real que el campo mensaje no esté vacío
    messageField.addEventListener('input', function() {
        if (this.value.trim() === "") {
            this.setCustomValidity("El mensaje no puede estar vacío.");
        } else {
            this.setCustomValidity(""); // Borrar el mensaje si todo está correcto
        }
    });
});

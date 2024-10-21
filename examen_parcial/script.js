function validateForm() {
    const name = document.getElementById('name').value;
    const nameRegex = /^[A-Za-z\s]+$/;

    if (!nameRegex.test(name)) {
        alert('El nombre no puede contener números ni caracteres especiales.');
        return false;
    }

    return true;
}

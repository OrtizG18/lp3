window.addEventListener('load', () => {
$('#nombre').bind('keyup blur', function(){
    var node = $(this);
    node.val(node.val().replace(/[^a-z && A-Z]/g,''));
});

$('#apellido').bind('keyup blur', function(){
    var node = $(this);
    node.val(node.val().replace(/[^a-z && A-Z]/g,''));
});

$('#cedula').bind('keyup blur', function(){
    var node = $(this);
    node.val(node.val().replace(/[^0-9]/g,''));
});

document.getElementById('email').addEventListener('input', function(event){
    campo = event.target;
    valido = document.getElementById('emailOK');

    emailreg = /^[-\w.%+]{1,64}@(?:[a-z 0-9 -]{1,64}\.){1,50}[a-z]{2,10}$/i;
    if(emailreg.test(campo.value)){
        valido.innerText = "Email valido";
    }else{
        valido.innerText = "Email no valido";
    }
});
});
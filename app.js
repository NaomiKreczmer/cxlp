function valida_envio() {

       if (document.formulario.nombre.value.length == 0) {
        alert("Por favor, ingrese su nombre")
                return 0;
    }
     
    if (document.formulario.email.value.length == 0) {
        alert("Por favor, ingrese su email")
                return 0;
    }


    
    document.formulario.submit();
    alert("Muchas gracias! Estaremos respondiendo a la brevedad!");
}

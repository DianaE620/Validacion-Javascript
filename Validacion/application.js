$(document).ready(function(){

  //alert("ready :)");
  $("#form_validacion").on("submit", function(){
    event.preventDefault();
    //alert()

    // javascript
    //var email = document.getElementById('correo').value;
    //var pass = document.getElementById('password').value;

    // jquery
    var email = $("#correo").val();
    var pass = $("#password").val();

    //console.log(email + " " + pass)

    var regex_num = /[0-9]/
    var regex_may = /[A-Z]/
    var regex_numcaracteres = /[a-zA-Z0-9]{8,}/
    var regex_email = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var bandera = true
    var error = []

    if(!regex_num.test(pass)){
      error.push("La contraseña debe contener al menos un numero")
      bandera = false
    }

    if(!regex_may.test(pass)){
      error.push("La contraseña debe tener al menos una mayuscula")
      //$("#errores").append("<li>Al menos una mayuscula</li>")
      bandera = false
    }

    if(!regex_numcaracteres.test(pass)){
      error.push("La conbtraseña debe tener al menos 8 caracteres")
      //$("#errores").append("<li>Al menos 8 caracteres</li>")
      bandera = false
    }

    if(!regex_email.test(email)){
      error.push("El email que ingresaste es invalido")
      //$("#errores").html("<li>Email invalido</li>")
      bandera = false
    }

   

    if(bandera){
      document.getElementById("form_validacion").submit()
      //$("#form_validacion").submit()
    }else{

      $("li").remove();

      for( x=0 ; x < error.length; x++ ){
        $("#errores").append("<li>"+ error[x] + "</li>")
        //console.log(error[x])
      }
    }


  });

 
});


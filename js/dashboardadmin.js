const out = () => {
    Swal.fire({
        icon: "success",
        title: "GRACIAS POR USAR NUESTROS SERVICIOS",
        text: "¡Esperamos volver a verte pronto!",
        customClass: {
            confirmButton: "botonaceptar"
        }
      }).then(() => {
        localStorage.removeItem("UsuarioActivo");
        window.location.href = "../index.html"

      })

}

const mostrar = () => {
  let nombre = localStorage.getItem("UsuarioActivo");

  if(nombre){
    document.getElementById("UsuarioActivo").value = nombre
  } else{
    document.getElementById("UsuarioActivo").value = "No identificado"
  }


}

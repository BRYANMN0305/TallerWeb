const ingresar = () => {
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;

    if (usuario === "" || contraseña === "") {
        Swal.fire({
            icon: "error",
            title: "ERROR",
            text: "Algún campo está vacío",
            customClass: {
                confirmButton: "botonaceptar"
            }
        }).then(() => {
            document.getElementById("usuario").value = "";
            document.getElementById("contraseña").value = "";
        });
    } else if ((usuario === "Sebas" || usuario === "Bryan" || usuario === "Iryuu") && contraseña === "12345") {
        localStorage.setItem("UsuarioActivo" , usuario) 
        Swal.fire({
            title: "ACCESO EXITOSO",
            text: "¡Ha ingresado exitosamente! Bienvenido, administrador: " + usuario,
            icon: "success",
            customClass: {
                confirmButton: "botonaceptar"
            }
        }).then(() => {
            window.location.href = "html/dashboardadminA.html";
        });
     } else if ((usuario === "Bassa" || usuario === "Muñoz" || usuario === "Iglesias") && contraseña === "12345"){
        localStorage.setItem("UsuarioActivo" , usuario)   
        Swal.fire({
            title: "ACCESO EXITOSO",
            text: "¡Ha ingresado exitosamente! Bienvenido, asesor: " + usuario,
            icon: "success",
            customClass: {
                confirmButton: "botonaceptar"
            }
        }).then(() => {
            window.location.href = "html/dashboardempleadoE.html";
        });
        
    } else {
        Swal.fire({
            icon: "error",
            title: "ERROR",
            text: "Usuario o contraseña incorrectos",
            customClass: {
                confirmButton: "botonaceptar"
            }
        }).then(() => {
            document.getElementById("usuario").value = "";
            document.getElementById("contraseña").value = "";
        });

    }
}
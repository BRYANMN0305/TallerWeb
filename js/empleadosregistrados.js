const tabla = document.querySelector("#lista-usuarios tbody")

const cargarusuario = () => {
    fetch("../json/usuarios.json")
    .then(respuesta => respuesta.json()) // formato de la información (json)
    .then(usuarios => {
        usuarios.forEach(usuario => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${usuario.id}</td>
                <td>${usuario.nombre}</td> 
                <td>${usuario.apellido}</td>
                <td>${usuario.cargo}</td>
                <td>${usuario.placa}</td>
                <td>${usuario.fechaRegistro}</td>
                <td>${usuario.telefono}</td>
            `;
            tabla.appendChild(row);           
        });
    })
    .catch(error => console.error("Error al cargar usuarios:", error));
};

cargarusuario();

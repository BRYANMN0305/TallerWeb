document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad para el botón "Editar"
    document.getElementById('edit-001').addEventListener('click', function() {
        editarEmpleado('001');
    });

    document.getElementById('edit-002').addEventListener('click', function() {
        editarEmpleado('002');
    });

    // Funcionalidad para el botón "Eliminar"
    document.getElementById('delete-001').addEventListener('click', function() {
        eliminarEmpleado('001');
    });

    document.getElementById('delete-002').addEventListener('click', function() {
        eliminarEmpleado('002');
    });
});

function editarEmpleado(id) {
    // Lógica básica para editar
    alert("Editar empleado con ID: " + id);
    // Aquí podrías abrir un modal o redirigir a un formulario con los datos del empleado a editar
}

function eliminarEmpleado(id) {
    // Confirmación básica antes de eliminar
    const confirmacion = confirm("¿Estás seguro de que deseas eliminar el empleado con ID: " + id + "?");

    if (confirmacion) {
        alert("Empleado con ID " + id + " eliminado.");
        // Aquí podrías eliminar el registro de la tabla o hacerlo a través de una llamada a la base de datos
    }
}

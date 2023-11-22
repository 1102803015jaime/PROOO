function guardarMatricula() {
    var fecha = document.getElementById('fecha').value;
    var tema = document.getElementById('tema').value;
    var estudiante = document.getElementById('estudiante').value;
    var valor = document.getElementById('valor').value;

    // Crear un objeto con los datos de la matrícula
    var matricula = {
        fecha: fecha,
        tema: tema,
        estudiante: estudiante,
        valor: valor
    };

    // Convertir el objeto a una cadena JSON
    var matriculaJSON = JSON.stringify(matricula);

    // Guardar la cadena JSON en el almacenamiento local
    localStorage.setItem('matricula', matriculaJSON);
}
function guardarCurso() {
    var codigoCurso = document.getElementById('codigoCurso').value;
    var nombreCurso = document.getElementById('nombreCurso').value;
    var videos = document.getElementById('videos').value;

    // Crear un objeto con los datos del curso
    var curso = {
        codigoCurso: codigoCurso,
        nombreCurso: nombreCurso,
        videos: videos
    };

    // Convertir el objeto a una cadena JSON
    var cursoJSON = JSON.stringify(curso);

    // Guardar la cadena JSON en el almacenamiento local
    localStorage.setItem('curso', cursoJSON);
}
function guardarTema() {
    var codigo = document.getElementById('codigo').value;
    var nombre = document.getElementById('nombre').value;
    var descripcion = document.getElementById('descripcion').value;
    var cursos = document.getElementById('cursos').value;
    var costo = document.getElementById('costo').value;
    var precio = document.getElementById('precio').value;

    // Crear un objeto con los datos del tema
    var tema = {
        codigo: codigo,
        nombre: nombre,
        descripcion: descripcion,
        cursos: cursos,
        costo: costo,
        precio: precio
    };

    // Convertir el objeto a una cadena JSON
    var temaJSON = JSON.stringify(tema);

    // Guardar la cadena JSON en el almacenamiento local
    localStorage.setItem('tema', temaJSON);
}
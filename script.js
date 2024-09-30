function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

document.getElementById('form-curso').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const instructor = document.getElementById('instructor').value;
    const fecha = document.getElementById('fecha').value;
    const duracion = document.getElementById('duracion').value;
    const descripcion = document.getElementById('descripcion').value;

    // Crear el curso en la lista
    const listaCursos = document.getElementById('lista-cursos');
    const nuevoCurso = document.createElement('li');
    nuevoCurso.innerHTML = `
        <strong>${nombre}</strong> - ${instructor} <br>
        Fecha de Inicio: ${fecha}, Duración: ${duracion} semanas
        <button onclick="mostrarDetalles(this)">Ver más detalles</button>
        <p style="display: none;">${descripcion}</p>
    `;
    listaCursos.appendChild(nuevoCurso);

    // Limpiar los campos del formulario
    document.getElementById('form-curso').reset();
});

function mostrarDetalles(boton) {
    const descripcion = boton.nextElementSibling;
    descripcion.style.display = descripcion.style.display === 'none' ? 'block' : 'none';
}

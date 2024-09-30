// Cargar cursos desde localStorage
window.onload = function() {
    const courseList = JSON.parse(localStorage.getItem('courses')) || [];
    courseList.forEach(course => {
        addCourseToList(course);
    });
    showSection('home'); // Muestra la sección de inicio al cargar
};

// Función para mostrar una sección y ocultar las demás
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block'; // Muestra la sección seleccionada
        } else {
            section.style.display = 'none'; // Oculta las otras secciones
        }
    });
}

// Función para agregar un curso a la lista
function addCourseToList(course) {
    const courseListDiv = document.getElementById('course-list');
    const courseDiv = document.createElement('div');
    courseDiv.classList.add('course');

    courseDiv.innerHTML = `
        <h3>${course.name}</h3>
        <p><strong>Profesor:</strong> ${course.instructor}</p>
        <p><strong>Fecha de Inicio:</strong> ${course.startDate}</p>
        <p><strong>Duración:</strong> ${course.duration} semanas</p>
        <button class="details-btn" onclick="toggleDetails('details${course.id}')">Ver más detalles</button>
        <div id="details${course.id}" class="course-details" style="display: none;">
            <p>${course.description}</p>
        </div>
    `;
    courseListDiv.appendChild(courseDiv);
}

// Manejar el envío del formulario
document.getElementById('add-course-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const courseName = document.getElementById('course-name').value;
    const instructorName = document.getElementById('instructor-name').value;
    const startDate = document.getElementById('start-date').value;
    const duration = document.getElementById('duration').value;
    const description = document.getElementById('description').value;

    const courseId = Date.now(); // Usar el timestamp como ID único

    const course = {
        id: courseId,
        name: courseName,
        instructor: instructorName,
        startDate: startDate,
        duration: duration,
        description: description,
    };

    addCourseToList(course);

    // Guardar el curso en localStorage
    const courses = JSON.parse(localStorage.getItem('courses')) || [];
    courses.push(course);
    localStorage.setItem('courses', JSON.stringify(courses));

    // Reiniciar el formulario
    this.reset();
});

// Función para mostrar u ocultar detalles del curso
function toggleDetails(id) {
    var details = document.getElementById(id);
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

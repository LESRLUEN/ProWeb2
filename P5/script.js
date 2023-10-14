let calificaciones = [];

function agregarCalificaciones() {
    const numCalificaciones = document.getElementById('numCalificaciones').value;
    const container = document.getElementById('calificacionesContainer');
    container.innerHTML = '';

    for (let i = 1; i <= numCalificaciones; i++) {
        const label = document.createElement('label');
        label.textContent = `Calificacion ${i}:`;
        const input = document.createElement('input');
        input.type = 'number';
        input.required = true;
        container.appendChild(label);
        container.appendChild(input);
        container.appendChild(document.createElement('br'));
    }
}

function calcularPromedio() {
    const nombre = document.getElementById('nombre').value;
    const inputs = document.querySelectorAll('#calificacionesContainer input');
    calificaciones = [];

    inputs.forEach(input => {
        calificaciones.push(parseFloat(input.value));
    });

    const promedio = calificaciones.reduce((acc, curr) => acc + curr, 0) / calificaciones.length;

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p>Nombre del alumno: ${nombre}</p>`;
    resultadoDiv.innerHTML += `<p>Calificaciones individuales: ${calificaciones.join(', ')}</p>`;
    resultadoDiv.innerHTML += `<p>Promedio obtenido: ${promedio.toFixed(2)}</p>`;

    if (promedio >= 6) {
        resultadoDiv.innerHTML += '<p>Alumno aprobado</p>';
    } else {
        resultadoDiv.innerHTML += '<p>Alumno no aprobado</p>';
    }
}

function reiniciar() {
    document.getElementById('promedioForm').reset();
    document.getElementById('calificacionesContainer').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    calificaciones = [];
}

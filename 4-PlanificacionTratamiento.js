// Al cargar el formulario, añadimos un evento al enviar
document.getElementById('treatmentForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar el comportamiento por defecto del formulario

    // Limpia mensajes previos
    const messageDiv = document.getElementById('message');
    messageDiv.className = 'hidden';
    messageDiv.textContent = '';

    // Recuperar valores del formulario
    const patientName = document.getElementById('patientName').value.trim();
    const sessions = document.getElementById('sessions').value.trim();
    const exercises = document.getElementById('exercises').value.trim();
    const loads = document.getElementById('loads').value.trim();
    const notes = document.getElementById('notes').value.trim();

    // Validar entradas
    if (!patientName || !sessions || !exercises || !loads || !notes) {
        messageDiv.textContent = 'Por favor, completa todos los campos obligatorios.';
        messageDiv.className = 'error';
        return;
    }

    // Validación numérica
    if (sessions < 1 || loads < 0) {
        messageDiv.textContent = 'El número de sesiones debe ser mayor a 0 y la carga no puede ser negativa.';
        messageDiv.className = 'error';
        return;
    }

    // Simular el guardado de datos
    setTimeout(() => {
        messageDiv.textContent = `Plan de tratamiento para ${patientName} guardado exitosamente.`;
        messageDiv.className = 'success';

        // Opción de limpiar el formulario
        document.getElementById('treatmentForm').reset();
    }, 1000);
});

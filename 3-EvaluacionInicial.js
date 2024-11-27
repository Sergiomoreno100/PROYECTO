// Al cargar el formulario, añadimos un evento al enviar
document.getElementById('evaluationForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar el comportamiento por defecto del formulario

    // Limpia mensajes previos
    const messageDiv = document.getElementById('message');
    messageDiv.className = 'hidden';
    messageDiv.textContent = '';

    // Recuperar valores del formulario
    const patientName = document.getElementById('patientName').value.trim();
    const mobility = document.getElementById('mobility').value.trim();
    const strength = document.getElementById('strength').value.trim();
    const functionalCapacity = document.getElementById('functionalCapacity').value.trim();
    const diagnosis = document.getElementById('diagnosis').value.trim();

    // Validar entradas
    if (!patientName || !mobility || !strength || !functionalCapacity || !diagnosis) {
        messageDiv.textContent = 'Por favor, completa todos los campos obligatorios.';
        messageDiv.className = 'error';
        return;
    }

    // Validación numérica
    if (
        mobility < 1 || mobility > 10 ||
        strength < 1 || strength > 10 ||
        functionalCapacity < 1 || functionalCapacity > 10
    ) {
        messageDiv.textContent = 'Los valores de movilidad, fuerza y capacidad funcional deben estar entre 1 y 10.';
        messageDiv.className = 'error';
        return;
    }

    // Simular el guardado de datos
    setTimeout(() => {
        messageDiv.textContent = `Evaluación inicial para ${patientName} guardada exitosamente.`;
        messageDiv.className = 'success';

        // Opción de limpiar el formulario
        document.getElementById('evaluationForm').reset();
    }, 1000);
});

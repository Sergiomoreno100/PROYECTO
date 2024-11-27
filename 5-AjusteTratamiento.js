// Añadir un evento para gestionar el formulario de ajuste
document.getElementById('adjustForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevenir el envío predeterminado

    // Limpia mensajes previos
    const messageDiv = document.getElementById('message');
    messageDiv.className = 'hidden';
    messageDiv.textContent = '';

    // Recuperar datos del formulario
    const planId = document.getElementById('planId').value.trim();
    const progress = document.getElementById('progress').value.trim();
    const adjustedExercises = document.getElementById('adjustedExercises').value.trim();
    const newIntensity = document.getElementById('newIntensity').value.trim();
    const notes = document.getElementById('notes').value.trim();

    // Validar entradas
    if (!planId || !progress || !adjustedExercises || !newIntensity || !notes) {
        messageDiv.textContent = 'Por favor, completa todos los campos obligatorios.';
        messageDiv.className = 'error';
        return;
    }

    // Validar rango de intensidad
    if (newIntensity < 1 || newIntensity > 100) {
        messageDiv.textContent = 'La intensidad debe estar entre 1% y 100%.';
        messageDiv.className = 'error';
        return;
    }

    // Simular la actualización del plan
    setTimeout(() => {
        messageDiv.textContent = `El plan de tratamiento ${planId} ha sido actualizado exitosamente.`;
        messageDiv.className = 'success';

        // Limpiar el formulario después del éxito
        document.getElementById('adjustForm').reset();
    }, 1000);
});

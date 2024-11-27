// Evento para gestionar el formulario y generar un informe
document.getElementById('reportForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevenir el envío predeterminado

    // Limpiar mensajes previos
    const reportMessage = document.getElementById('reportMessage');
    reportMessage.className = 'hidden';
    reportMessage.textContent = '';

    // Recuperar datos del formulario
    const patientId = document.getElementById('patientId').value.trim();
    const sessionSummary = document.getElementById('sessionSummary').value.trim();
    const results = document.getElementById('results').value.trim();
    const recommendations = document.getElementById('recommendations').value.trim();

    // Validar entradas
    if (!patientId || !sessionSummary || !results || !recommendations) {
        reportMessage.textContent = 'Por favor, completa todos los campos obligatorios.';
        reportMessage.className = 'error';
        return;
    }

    // Generar el contenido del informe
    const reportContent = `
        Informe de Seguimiento de Resultados:
        
        ID del Paciente: ${patientId}
        
        Resumen de Sesiones:
        ${sessionSummary}
        
        Resultados del Tratamiento:
        ${results}
        
        Recomendaciones:
        ${recommendations}
    `;

    // Crear un archivo para descargar
    const blob = new Blob([reportContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `Informe_${patientId}.txt`;
    link.click();

    // Mensaje de éxito
    reportMessage.textContent = `Informe generado y descargado para el paciente ${patientId}.`;
    reportMessage.className = 'success';

    // Limpiar el formulario
    document.getElementById('reportForm').reset();
});

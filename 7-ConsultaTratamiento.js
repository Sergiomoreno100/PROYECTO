// Datos simulados (puedes reemplazarlos con una API o base de datos)
const mockData = {
    P12345: {
        plan: "Fortalecimiento muscular progresivo.",
        recommendations: "Realizar ejercicios 3 veces por semana, descansar adecuadamente.",
        notes: "Incrementar la intensidad gradualmente a partir de la próxima sesión."
    },
    P67890: {
        plan: "Terapia de rango articular.",
        recommendations: "Ejercicios diarios suaves de movilidad.",
        notes: "Reevaluar en 2 semanas para ajustar."
    }
};

// Manejar la consulta del tratamiento
document.getElementById('treatmentForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevenir el comportamiento por defecto

    // Limpiar mensajes previos
    const errorMessage = document.getElementById('errorMessage');
    const treatmentDetails = document.getElementById('treatmentDetails');
    errorMessage.className = 'hidden';
    treatmentDetails.className = 'hidden';

    // Obtener el ID del paciente
    const patientId = document.getElementById('patientId').value.trim();

    // Validar si el paciente existe
    if (mockData[patientId]) {
        // Mostrar detalles del tratamiento
        document.getElementById('planDetails').textContent = mockData[patientId].plan;
        document.getElementById('recommendations').textContent = mockData[patientId].recommendations;
        document.getElementById('notes').textContent = mockData[patientId].notes;
        treatmentDetails.className = '';
    } else {
        // Mostrar mensaje de error
        errorMessage.textContent = `No se encontró un tratamiento activo para el paciente con ID ${patientId}.`;
        errorMessage.className = '';
    }
});

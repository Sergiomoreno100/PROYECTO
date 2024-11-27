document.getElementById('treatmentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Clear previous messages
    const messageDiv = document.getElementById('message');
    messageDiv.className = 'hidden';
    messageDiv.textContent = '';

    // Retrieve form values
    const patientName = document.getElementById('patientName').value.trim();
    const sessionDate = document.getElementById('sessionDate').value.trim();
    const exercises = document.getElementById('exercises').value.trim();
    const observations = document.getElementById('observations').value.trim();
    const progress = document.getElementById('progress').value;

    // Validate inputs
    if (!patientName || !sessionDate || !exercises) {
        messageDiv.textContent = 'Por favor, completa todos los campos obligatorios.';
        messageDiv.className = 'error';
        return;
    }

    // Simulate saving the data
    setTimeout(() => {
        messageDiv.textContent = `Seguimiento registrado para ${patientName} el ${sessionDate}. Progreso: ${progress}%.`;
        messageDiv.className = 'success';

        // Optionally, clear the form
        document.getElementById('treatmentForm').reset();
        document.getElementById('progressValue').textContent = '50%'; // Reset progress value
    }, 1000);
});

// Update progress value dynamically
document.getElementById('progress').addEventListener('input', function () {
    document.getElementById('progressValue').textContent = `${this.value}%`;
});

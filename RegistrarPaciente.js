document.getElementById('patientForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Clear any previous message
    const messageDiv = document.getElementById('message');
    messageDiv.className = 'hidden';
    messageDiv.textContent = '';

    // Retrieve form values
    const fullName = document.getElementById('fullName').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const dni = document.getElementById('dni').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const medicalInfo = document.getElementById('medicalInfo').value.trim();

    // Validate inputs
    if (!fullName || !dob || !dni || !email || !phone) {
        messageDiv.textContent = 'Por favor, completa todos los campos obligatorios.';
        messageDiv.className = 'error';
        return;
    }

    // Simulate saving the data
    setTimeout(() => {
        messageDiv.textContent = `¡Paciente ${fullName} registrado exitosamente!`;
        messageDiv.className = 'success';

        // Optionally, clear the form
        document.getElementById('patientForm').reset();
    }, 1000);
});

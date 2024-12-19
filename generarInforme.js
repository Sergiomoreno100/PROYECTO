document.getElementById('informeForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const messageDiv = document.getElementById('message');
    messageDiv.className = 'hidden';
    messageDiv.textContent = '';

    const pacienteId = document.getElementById('pacienteId').value.trim();
    const fisioterapeutaId = document.getElementById('fisioterapeutaId').value.trim();
    const fechaInforme = document.getElementById('fechaInforme').value.trim();
    const resumenInforme = document.getElementById('resumenInforme').value.trim();
    const detallesInforme = document.getElementById('detallesInforme').value.trim();

    if (!pacienteId || !fisioterapeutaId || !fechaInforme || !resumenInforme) {
        messageDiv.textContent = 'Por favor, completa todos los campos obligatorios.';
        messageDiv.className = 'error';
        return;
    }

    const informeData = {
        paciente: { id: pacienteId },
        fisioterapeuta: { id: fisioterapeutaId },
        fechaInforme: fechaInforme,
        resumenInforme: resumenInforme,
        detallesInforme: detallesInforme
    };

    fetch('http://localhost:8082/informes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa('admin:F1510Ter@p145!')
        },
        body: JSON.stringify(informeData)
    })
    .then(response => response.json())
    .then(data => {
        messageDiv.textContent = 'Informe registrado con éxito.';
        messageDiv.className = 'success';
    })
    .catch(error => {
        console.error('Error:', error);
        messageDiv.textContent = 'Error al registrar el informe.';
        messageDiv.className = 'error';
    });
});

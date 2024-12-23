document.getElementById('treatmentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const messageDiv = document.getElementById('message');
    messageDiv.className = 'hidden';
    messageDiv.textContent = '';

    // Obtener valores del formulario
    const pacienteId = document.getElementById('pacienteId').value.trim();
    const fisioterapeutaId = document.getElementById('fisioterapeutaId').value.trim();
    const tipoTratamiento = document.getElementById('tipoTratamiento').value.trim();
    const fechaInicio = document.getElementById('fechaInicio').value.trim();
	const descripcion = document.getElementById('descripcion').value.trim();
    const estado = document.getElementById('estado').value.trim();

    // Validar campos obligatorios
    if (!pacienteId || !fisioterapeutaId || !tipoTratamiento || !fechaInicio || !descripcion || !estado) {
        messageDiv.textContent = 'Por favor, completa todos los campos obligatorios.';
        messageDiv.className = 'error';
        return;
    }

    // Crear objeto de datos del tratamiento
    const tratamientoData = {
        pacienteId: pacienteId,
        fisioterapeutaId: fisioterapeutaId,
        tipoTratamiento: tipoTratamiento,
        fechaInicio: fechaInicio,
		descripcion:descripcion,
        estado: estado
    };

    console.log('Sending data:', tratamientoData);

    // Enviar los datos al servidor (esto es solo un ejemplo, usa la URL correspondiente)
    fetch('http://localhost:8082/tratamientos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa('admin:F1510Ter@p145!')
        },
        body: JSON.stringify(tratamientoData)
    })
    .then(response => {
        console.log('Response received:', response);
        return response.json();
    })
    .then(data => {
        console.log('Response data:', data);
        if (data && data.data) {
            const tratamiento = data.data;
            messageDiv.textContent = `¡Tratamiento registrado exitosamente para el paciente ${tratamiento.pacienteId}!`;
            messageDiv.className = 'success';

            // Limpiar el formulario
            document.getElementById('treatmentForm').reset();
        } else {
            messageDiv.textContent = 'Ocurrió un error al registrar el tratamiento.';
            messageDiv.className = 'error';
        }
    })
    .catch(error => {
        messageDiv.textContent = 'Ocurrió un error al registrar el tratamiento: ' + error.message;
        messageDiv.className = 'error';
    });
});

// Función para gestionar el botón de regreso al menú
document.getElementById('returnButton').addEventListener('click', function() {
    window.location.href = '/'; // Redirige a la página principal o menú
});

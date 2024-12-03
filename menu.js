// Opciones del menú según el rol
const menuOptions = {
    paciente: [
        { name: "Consultar Tratamiento", link: "consulta_tratamiento.html" },
        { name: "Historial Médico", link: "historial_medico.html" },
    ],
    fisioterapeuta: [
        { name: "Registrar Paciente", link: "registro_paciente.html" },
        { name: "Planificación de Tratamiento", link: "planificacion_tratamiento.html" },
        { name: "Seguimiento de Tratamiento", link: "seguimiento_tratamiento.html" },
    ],
    administrador: [
        { name: "Gestionar Usuarios", link: "gestion_usuarios.html" },
        { name: "Reportes y Estadísticas", link: "reportes_estadisticas.html" },
        { name: "Configuración del Sistema", link: "configuracion_sistema.html" },
    ],
};

// Función para generar el menú dinámicamente
function generateMenu(role) {
    const menuList = document.getElementById("menu-list");
    menuList.innerHTML = ""; // Limpiar cualquier menú existente

    // Combinar opciones según el rol
    let options = [];
    if (role === "paciente") {
        options = menuOptions.paciente;
    } else if (role === "fisioterapeuta") {
        options = [...menuOptions.fisioterapeuta, ...menuOptions.paciente];
    } else if (role === "administrador") {
        options = [
            ...menuOptions.administrador,
            ...menuOptions.fisioterapeuta,
            ...menuOptions.paciente,
        ];
    }

    // Crear los elementos del menú
    options.forEach((option) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = option.link;
        a.textContent = option.name;
        li.appendChild(a);
        menuList.appendChild(li);
    });
}

// Cambiar el rol para probar (ejemplo: "paciente", "fisioterapeuta", "administrador")
const userRole = "administrador"; // Cambia esto según el usuario
generateMenu(userRole);

// Inicializamos EmailJS
emailjs.init("-wQhkbNrffDVsjkvy"); // Reemplaza con tu public key de EmailJS

// Obtener referencias a los elementos
const chatbot01Btn = document.getElementById('chatbot01');
const formModalContainer = document.getElementById('form-modal-container');
const closeFormModalBtn = document.querySelector('.close-form-modal');
const empresaForm = document.getElementById('empresa-form');
const alertContainer = document.getElementById('alert-container');
const pregunta01 = document.getElementById('pregunta01');
const pregunta02 = document.getElementById('pregunta02');
const pregunta03 = document.getElementById('pregunta03');
const pregunta04 = document.getElementById('pregunta04');
const pregunta05 = document.getElementById('pregunta05');
const pregunta06 = document.getElementById('pregunta06');
const pregunta07 = document.getElementById('pregunta07');
const pregunta08 = document.getElementById('pregunta08');
const pregunta09 = document.getElementById('pregunta09');
const pregunta10 = document.getElementById('pregunta10');
const pregunta11 = document.getElementById('pregunta11');
const pregunta12 = document.getElementById('pregunta12');
const pregunta13 = document.getElementById('pregunta13');
const pregunta14 = document.getElementById('pregunta14');
const pregunta15 = document.getElementById('pregunta15');
const pregunta16 = document.getElementById('pregunta16');
const pregunta17 = document.getElementById('pregunta17');
const pregunta18 = document.getElementById('pregunta18');
const pregunta19 = document.getElementById('pregunta19');
const pregunta20 = document.getElementById('pregunta20');
const pregunta21 = document.getElementById('pregunta21');
const pregunta22 = document.getElementById('pregunta22');
const pregunta23 = document.getElementById('pregunta23');
const pregunta24 = document.getElementById('pregunta24');
// Función para mostrar alertas
function showAlert(message, type) {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    alertContainer.innerHTML = '';
    alertContainer.appendChild(alert);
    
    // Remover la alerta después de 5 segundos
    setTimeout(() => {
        alert.remove();
    }, 5000);
}

// Función para abrir el modal del formulario
function openFormModal() {
    formModalContainer.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Función para cerrar el modal del formulario
function closeFormModal() {
    formModalContainer.classList.remove('active');
    document.body.style.overflow = 'auto';
    empresaForm.reset();
    alertContainer.innerHTML = '';
}

// Event listeners
chatbot01Btn.addEventListener('click', (e) => {
    e.preventDefault();
    openFormModal();
});

closeFormModalBtn.addEventListener('click', closeFormModal);

formModalContainer.addEventListener('click', (e) => {
    if (e.target === formModalContainer) {
        closeFormModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && formModalContainer.classList.contains('active')) {
        closeFormModal();
    }
});

empresaForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Obtenemos todos los valores del formulario
    const formData = {
        empresa: document.getElementById('empresa').value,
        sector: document.getElementById('sector').value,
        ubicacion: document.getElementById('ubicacion').value,
        telefono: document.getElementById('telefono').value,
        email: document.getElementById('email').value,
        web: document.getElementById('web').value,
        facebook: document.getElementById('facebook').value,
        instagram: document.getElementById('instagram').value,
        twitter: document.getElementById('twitter').value,
        linkedin: document.getElementById('linkedin').value,
        pregunta01: document.getElementById('pregunta01').value,
        pregunta02: document.getElementById('pregunta02').value,
        pregunta03: document.getElementById('pregunta03').value,
        pregunta04: document.getElementById('pregunta04').value,
        pregunta05: document.getElementById('pregunta05').value,
        pregunta06: document.getElementById('pregunta06').value,
        pregunta07: document.getElementById('pregunta07').value,
        pregunta08: document.getElementById('pregunta08').value,
        pregunta09: document.getElementById('pregunta09').value,
        pregunta10: document.getElementById('pregunta10').value,
        pregunta11: document.getElementById('pregunta11').value,
        pregunta12: document.getElementById('pregunta12').value,
        pregunta13: document.getElementById('pregunta13').value,
        pregunta14: document.getElementById('pregunta14').value,
        pregunta15: document.getElementById('pregunta15').value,
        pregunta16: document.getElementById('pregunta16').value,
        pregunta17: document.getElementById('pregunta17').value,
        pregunta18: document.getElementById('pregunta18').value,
        pregunta19: document.getElementById('pregunta19').value,
        pregunta20: document.getElementById('pregunta20').value,
        pregunta21: document.getElementById('pregunta21').value,
        pregunta22: document.getElementById('pregunta22').value,
        pregunta23: document.getElementById('pregunta23').value,
        pregunta24: document.getElementById('pregunta24').value,
    };

    try {
        // Enviamos el email usando EmailJS
        await emailjs.send(
            "service_vstac3d", // Reemplaza con tu Service ID de EmailJS
            "template_r2z381u", // Reemplaza con tu Template ID de EmailJS
            {
                to_email: "sp9979182@gmail.com",
                from_name: formData.empresa,
                from_email: formData.email,
                message: `
                    Empresa: ${formData.empresa}
                    Sector: ${formData.sector}
                    Ubicación: ${formData.ubicacion}
                    Teléfono: ${formData.telefono}
                    Email: ${formData.email}
                    Web: ${formData.web}
                    Facebook: ${formData.facebook}
                    Instagram: ${formData.instagram}
                    Twitter: ${formData.twitter}
                    LinkedIn: ${formData.linkedin}
                    Pregunta 01: ${formData.pregunta01}
                    Pregunta 02: ${formData.pregunta02}
                    Pregunta 03: ${formData.pregunta03}
                    Pregunta 04: ${formData.pregunta04}
                    Pregunta 05: ${formData.pregunta05}
                    Pregunta 06: ${formData.pregunta06}
                    Pregunta 07: ${formData.pregunta07}
                    Pregunta 08: ${formData.pregunta08}
                    Pregunta 09: ${formData.pregunta09}
                    Pregunta 10: ${formData.pregunta10}
                    Pregunta 11: ${formData.pregunta11}
                    Pregunta 12: ${formData.pregunta12}
                    Pregunta 13: ${formData.pregunta13}
                    Pregunta 14: ${formData.pregunta14}
                    Pregunta 15: ${formData.pregunta15}
                    Pregunta 16: ${formData.pregunta16}
                    Pregunta 17: ${formData.pregunta17}
                    Pregunta 18: ${formData.pregunta18}
                    Pregunta 19: ${formData.pregunta19}
                    Pregunta 20: ${formData.pregunta20}
                    Pregunta 21: ${formData.pregunta21}
                    Pregunta 22: ${formData.pregunta22}
                    Pregunta 23: ${formData.pregunta23}
                    Pregunta 24: ${formData.pregunta24}
                    
                `
            }
        );

        showAlert('¡Formulario enviado con éxito!', 'success');
        setTimeout(closeFormModal, 2000);
    } catch (error) {
        console.error('Error al enviar el formulario:', error);
        showAlert('Error al enviar el formulario. Por favor, intente nuevamente.', 'error');
    }
});
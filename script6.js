// Datos de los servicios desde el documento edit.txt
    const serviciosData = {
      "Gestión de Proyectos": {
        descripcion: "Desde la planificación hasta la ejecución y optimización, en Dominican HubVix te acompañamos en todas las fases de tu proyecto. Implementando metodologías ágiles y estrategias personalizadas para garantizar eficiencia, productividad y resultados tangibles.",
        caracteristicas: [
          "Planificación estratégica y operativa",
          "Optimización de recursos y procesos",
          "Monitoreo y evaluación de resultados",
          "Gestión de riesgos y toma de decisiones basada en datos"
        ]
      },
      "Digitalización de Empresas": {
        descripcion: "Transformamos tu negocio con soluciones digitales innovadoras,tomando en cuenta desde el diseño hasta el desarrollo de sistemas tecnológicos y avanzados que impulsan tu crecimiento empresarial hacia el exito.",
        caracteristicas: [
          "Creación y optimización de plataformas digitales",
          "Automatización de procesos empresariales",
          "Integración de analítica de datos",
          "Optimización de experiencia del cliente"
        ]
      },
      "Innovación y Desarrollo": {
        descripcion: "Fomentamos la incubación de startups y la generación de estrategias disruptivas para negocios que buscan diferenciarse y escalar en el mercado.",
        caracteristicas: [
          "Creación de modelos de negocio innovadores",
          "Desarrollo de productos y servicios tecnológicos",
          "Implementación de metodologías de innovación (Lean Startup, Design Thinking, etc.)",
          "Optimización de procesos con tecnologías emergentes"
        ]
      },
      "Impulso Empresarial": {
        descripcion: "Brindamos mentorías, networking y financiamiento estratégico para nuevos empresarios y empresas en crecimiento. Te conectamos con oportunidades clave para expandir tu negocio y potenciar su éxito.",
        caracteristicas: [
          "Asesoramiento empresarial personalizado",
          "Conexión con inversores y oportunidades de financiamiento",
          "Estrategias de crecimiento y posicionamiento de marca",
          "Acceso a redes de networking y ecosistemas emprendedores"
        ]
      }
    };
  
    // Obtener referencias a elementos
    const serviceCards = document.querySelectorAll('.service-card');
    const modalContainer = document.getElementById('modal-container');
    const modalTitle = document.getElementById('modal-title-gestion-de-proyectos');
    const modalDescription = document.getElementById('modal-description-gestion-de-proyectos');
    const modalFeatures = document.getElementById('modal-features');
    const closeModalBtn = document.querySelector('.close-modal');
  
    // Función para abrir el modal con la información correcta
    function openModal(servicioTitulo) {
      const servicio = serviciosData[servicioTitulo];
      
      if (servicio) {
        // Establecer el título
        modalTitle.textContent = servicioTitulo;
        
        // Establecer la descripción
        modalDescription.textContent = servicio.descripcion;
        
        // Limpiar y agregar las características
        modalFeatures.innerHTML = '';
        servicio.caracteristicas.forEach(caracteristica => {
          const li = document.createElement('li');
          li.textContent = caracteristica;
          modalFeatures.appendChild(li);
        });
        
        // Mostrar el modal
        modalContainer.classList.add('active');
        
        // Deshabilitar el scroll del body
        document.body.style.overflow = 'hidden';
      }
    }
  
    // Función para cerrar el modal
    function closeModal() {
      modalContainer.classList.remove('active');
      
      // Habilitar el scroll del body
      document.body.style.overflow = 'auto';
    }
  
    // Agregar event listeners a las tarjetas de servicio
    serviceCards.forEach(card => {
      card.addEventListener('click', () => {
        // Extraer el título del servicio del H3
        const servicioTitulo = card.querySelector('h3').textContent;
        openModal(servicioTitulo);
      });
    });
  
    // Event listener para cerrar el modal
    closeModalBtn.addEventListener('click', closeModal);
    
    // Cerrar el modal al hacer clic fuera de él
    modalContainer.addEventListener('click', (e) => {
      if (e.target === modalContainer) {
        closeModal();
      }
    });
    
    // Cerrar el modal con la tecla ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalContainer.classList.contains('active')) {
        closeModal();
      }
    });

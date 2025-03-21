
  document.addEventListener('DOMContentLoaded', function() {
  // Datos de ejemplo para proyectos (puedes reemplazar con tus datos reales)
  const projectsData = {
    'digitalizacion-clinica': {
      title: 'Digitalización Empresarial',
      subtitle: 'Desarrollo web - Sector salud',
      category: 'Digitalizacin',
      client: 'Ultra clinica dental',
      date: '2025',
      description: 'Implementamos una solución de digitalización completa para una importante clínica, optimizando la gestión de pacientes, historiales médicos y procesos administrativos mediante una plataforma web intuitiva que mejoró la eficiencia operativa en un 45%.',
      features: [
        'Sistema de gestión de citas online integrado',
        'Historiales médicos digitalizados con acceso seguro',
        'Dashboard para análisis de métricas operativas',
        'Integración con sistemas de facturación electrónica'
      ],
      images: [
        'https://scontent.fsti4-1.fna.fbcdn.net/v/t1.15752-9/479737888_991578068967874_230887108581911416_n.png?_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=9h3_8qhqimYQ7kNvgFdRe6o&_nc_oc=AdhVKQMT7cVZJfJQDZ7zwpPOJm-gWvRI7QiKhrP6i5Y_GFrh6M5GEW9DzssVxUruXhE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fsti4-1.fna&oh=03_Q7cD1gHw3A5Z9Dy35XlUlcqSeZHQImMLG24Mrk3GGoyjHX6LiQ&oe=67DDFD81',
        'https://scontent.fsti4-2.fna.fbcdn.net/v/t1.15752-9/475768834_909775531231122_6078577652801037164_n.png?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=j73deA8pihMQ7kNvgFVN_hj&_nc_oc=AdiXFnMbjN2fmCviTBHjElXz8CqmUsr_L2mB4xFisEOERLOKQ1GInWdPHPCZFzKhmcg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fsti4-2.fna&oh=03_Q7cD1gHgtP7EbPWTyexD1CM73V8GIf8FIA3R5nwJ0MhlNS0w8Q&oe=67DE0196',
        'https://scontent.fsti4-2.fna.fbcdn.net/v/t1.15752-9/480568741_1044741707412982_283530811582575835_n.png?_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=OqvZd-Vs2RwQ7kNvgEPWAhm&_nc_oc=AdjsMA9DlEsHmJ0FLYDYY4gKS7Exe-7ZO6rvfb3SyY_WaFHDJdLGf9EfwXc7xzp7AF4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fsti4-2.fna&oh=03_Q7cD1gE55E-wMUj-mZD3rpuGvxFABh7ij20b7Kvk2YWP44TIwQ&oe=67DDE8F6',
      ],
      similarProductLink: 'https://clinica-dental01.web.app/' // Link añadido aquí
    },
    'transformacion-digital': {
      title: 'Transformación Digital',
      subtitle: 'Automatización de procesos para cadena de restaurante',
      category: 'Digitalización',
      client: 'restaurante gourmet',
      date: '2025',
      description: 'Digitalizamos una cadena de restaurante sistema de automatización integral para una cadena de restaurante que permitió optimizar la gestión de inventario, pedidos y logística. La implementación de esta sistema redujo los tiempos de procesamiento en un 60% y mejoró las ventas en linea al 98%.',
      features: [
        'Sistema automatizado para recervar mesas en tiempo real',
        'Integración con plataforma de e-commerce para omnicanalidad',
        'Sistema de compras gastronomiicas en línea con pago seguro',
      ],
      images: [
        'https://scontent.fsti4-2.fna.fbcdn.net/v/t1.15752-9/478265202_1804853177034447_249973698979581056_n.png?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=4thxc0aWlZEQ7kNvgFOdEux&_nc_oc=AdhQDbWTcvHt3u1GsAv0OxYQCOxcnU6GBlQZK-B4a0kaQyeyBYkIXpUZZSLleuF2tk8&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fsti4-2.fna&oh=03_Q7cD1gHYe9cOkAp30q52FO4QB5jpRiXxDN3lIwoCiydIfSQ4EA&oe=67E1880D',
        'https://scontent.fsti4-1.fna.fbcdn.net/v/t1.15752-9/479380021_2585441061663906_710484672807515845_n.png?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=TN_izW_6FSEQ7kNvgGQqsCi&_nc_oc=AdgnzJzW_BW5EnEmsbKuQru4NWiIKZJZvoETzRtZl0ktRzRdbAaP3PMqLIutLKCBDYM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fsti4-1.fna&oh=03_Q7cD1gHNRzhEnmqCSxC9oAzvPoT4oOuwbqaBRScjvpiaglmdhQ&oe=67E1838C',
        'https://scontent.fsti4-1.fna.fbcdn.net/v/t1.15752-9/479423376_2497233870482289_7255953713180058477_n.png?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=o_6eIDbAm6kQ7kNvgFAhhRh&_nc_oc=Adh8YSvJMNC8k9C_K3yuI915gdTLWjxot0g9xtoc_u5mFo6kbaAaV05RLlncuEsbsjE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fsti4-1.fna&oh=03_Q7cD1gFFB-Kzw53McripsN6GPBhDeYU72VkvJMoq1nO-OPZ2TA&oe=67E18D7E'
      ],
      similarProductLink: 'https://hubvix-8b0ea.web.app/' // Link añadido aquí
    },
    'plataforma-innovacion': {
      title: 'Plataforma de Innovación',
      subtitle: 'dealer',
      category: 'Innovación',
      client: 'chicago motors',
      date: '2025',
      description: 'Creamos un marketplace de automoviles especializado que conecta a vendedores y compradores de todas partes del mundo para una compra/venta exitosa. La plataforma facilita el networking estratégico, la visibilidad de automoviles disponibles para el acceso al financiamiento para emprendedores tecnológicos en republica dominicana.',
      features: [
        'vehiculos totalmente nuevos',
        'financiamiento al mas bajo costo del pais',
        'Seguros de automoviles disponibles con descuentos',
        'Garantia de calidad para los vehiculos',
      ],
      images: [
        'https://scontent.fsti4-1.fna.fbcdn.net/v/t1.15752-9/480940513_1920453902062450_7951088696095688981_n.png?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=MN0c2Hvunm8Q7kNvgF-HaTa&_nc_oc=AdikX8foeDSIgRbKmXN0DWEh_ONL_PlS8zBcdUppkFNYLp1_owADhNoaQf8gpu6K1VM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fsti4-1.fna&oh=03_Q7cD1gFf2fTPIHDt8o2x2RAI8TzFM1QH4pCtFv99csxz1JFpoA&oe=67E17593',
        'https://scontent.fsti4-2.fna.fbcdn.net/v/t1.15752-9/480073662_927555899580789_1301874081901012094_n.png?_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=OoucvBRMPSIQ7kNvgGNE4O2&_nc_oc=Adh5whVznsnWH2sjhYvAuCuBpTZ4rWE5HHVWEv5FiyJJlLQpkGb--XVlvUSq9HPf8a4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fsti4-2.fna&oh=03_Q7cD1gGhD8oF-rSvBUEjEkiGQetoAfI0KYIMz-cZmHEk2Mo6Fw&oe=67E16186',
        'https://scontent.fsti4-1.fna.fbcdn.net/v/t1.15752-9/480054186_1027611749412093_4717539874143873127_n.png?_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=p44MRs5pJOkQ7kNvgFGe6Nf&_nc_oc=Adg1HcZHtTR7za_scHf-YKw9smCGzXxrn2l2Gy4NwtADJgq8eJjRGdsAwO1hR7qybI0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fsti4-1.fna&oh=03_Q7cD1gE3q69K12uaF3izHnF9jup07OqRXsZ_Ha0lNtXQ2X1Elw&oe=67E18DF6'
      ],
      similarProductLink: 'https://pro-innova-rd.firebaseapp.com/' // Link añadido aquí
    },
  };
  
  // Función para abrir el modal
  function openModal(projectId) {
    let project;
    
    if (projectId.includes('Digitalizacion')) {
  project = projectsData['digitalizacion-clinica'];
} else if (projectId.includes('Gestion')) {
  project = projectsData['transformacion-digital'];
} else if (projectId.includes('Plataforma')) {
  project = projectsData['plataforma-innovacion'];
}
    
    // Actualizar el contenido del modal
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-subtitle').textContent = project.subtitle;
    document.getElementById('project-category').textContent = project.category;
    document.getElementById('project-client').textContent = project.client;
    document.getElementById('project-date').textContent = project.date;
    document.getElementById('modal-description').textContent = project.description;
    
    // Actualizar el enlace del botón CTA
    const ctaButton = document.querySelector('.modal-cta');
    ctaButton.href = project.similarProductLink;
    
    // Actualizar las imágenes
    document.getElementById('main-image').src = project.images[0];
    
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, index) => {
      if (project.images[index]) {
        thumb.src = project.images[index];
        thumb.dataset.src = project.images[index];
        thumb.style.display = 'block';
        if (index === 0) {
          thumb.classList.add('active');
        } else {
          thumb.classList.remove('active');
        }
      } else {
        thumb.style.display = 'none';
      }
    });
    
    // Actualizar características
    const featuresList = document.getElementById('project-features');
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
      const li = document.createElement('li');
      li.textContent = feature;
      featuresList.appendChild(li);
    });
    
    modalContainer.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Resto del código existente para manejar eventos...
  const detailButtons = document.querySelectorAll('.portfolio-item .cta-button');
  const modalContainer = document.querySelector('.portfolio-modal-container');
  const closeModalBtn = document.querySelector('.modal-close-btn');

  detailButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const portfolioItem = this.closest('.portfolio-item');
      const projectTitle = portfolioItem.querySelector('h3').textContent;
      openModal(projectTitle);
    });
  });

  function closeModal() {
    modalContainer.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  closeModalBtn.addEventListener('click', closeModal);

  modalContainer.addEventListener('click', function(e) {
    if (e.target === modalContainer) {
      closeModal();
    }
  });

  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('thumbnail')) {
      document.getElementById('main-image').src = e.target.dataset.src;
      document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
      });
      e.target.classList.add('active');
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalContainer.classList.contains('active')) {
      closeModal();
    }
  });
});
 // Add this to your existing JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const openEvalButton = document.getElementById('openEvaluation');
  const evalModal = document.getElementById('evaluation-modal');
  const closeModalBtn = document.querySelector('.modal-close');

  // Open modal when clicking the CTA button
  openEvalButton.addEventListener('click', function(e) {
      e.preventDefault();
      evalModal.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
  });

  // Close modal when clicking the close button
  closeModalBtn.addEventListener('click', function() {
      closeEvalModal();
  });

  // Close modal when clicking outside
  evalModal.addEventListener('click', function(e) {
      if (e.target === evalModal) {
          closeEvalModal();
      }
  });

  function closeEvalModal() {
      evalModal.style.display = 'none';
      document.body.style.overflow = 'auto'; // Restore scrolling
      resetEvaluation(); // Reset the form
  }

  // Add ESC key support to close modal
  document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && evalModal.style.display === 'block') {
          closeEvalModal();
      }
  });

  // Modify the showEvaluationForm function
  window.showEvaluationForm = function() {
      document.querySelector('.services-grid').style.display = 'none';
      const evaluationForm = document.querySelector('.evaluation-form');
      evaluationForm.style.display = 'block';
      document.querySelector('.result').style.display = 'none';
      selectedOptions = {};
      
      const questionsContainer = document.getElementById('questions');
      questionsContainer.innerHTML = '';
      
      evaluationQuestions[currentService].forEach((q, index) => {
          const questionDiv = document.createElement('div');
          questionDiv.className = 'question';
          
          const questionText = document.createElement('h3');
          questionText.textContent = q.question;
          questionDiv.appendChild(questionText);
          
          const optionsDiv = document.createElement('div');
          optionsDiv.className = 'options';
          
          q.options.forEach((opt, optIndex) => {
              const option = document.createElement('div');
              option.className = 'option';
              option.textContent = opt.text;
              option.onclick = () => selectOption(index, optIndex, option);
              optionsDiv.appendChild(option);
          });
          
          questionDiv.appendChild(optionsDiv);
          questionsContainer.appendChild(questionDiv);
      });
  };

  // Modify the resetEvaluation function
  window.resetEvaluation = function() {
      document.querySelector('.result').style.display = 'none';
      document.querySelector('.services-grid').style.display = 'grid';
      document.querySelector('.evaluation-form').style.display = 'none';
      document.getElementById('companyName').value = '';
      document.getElementById('companyEmail').value = '';
      selectedOptions = {};
      currentService = '';
  };
});

document.addEventListener('DOMContentLoaded', function() {
  const eyeButton = document.getElementById('eyeButton');
  const letterModal = document.getElementById('letterModal');
  const closeLetter = document.getElementById('closeLetter');
  
  // Abrir la carta al hacer clic en el botón
  eyeButton.addEventListener('click', function() {
      letterModal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Evitar el desplazamiento de la página
  });
  
  // Cerrar la carta
  closeLetter.addEventListener('click', function() {
      letterModal.classList.remove('active');
      document.body.style.overflow = 'auto'; // Restaurar el desplazamiento
  });
  
  // Cerrar la carta al hacer clic fuera de ella
  letterModal.addEventListener('click', function(e) {
      if (e.target === letterModal) {
          letterModal.classList.remove('active');
          document.body.style.overflow = 'auto';
      }
  });
  
  // Cerrar la carta con la tecla Escape
  document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && letterModal.classList.contains('active')) {
          letterModal.classList.remove('active');
          document.body.style.overflow = 'auto';
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const floatingButton = document.getElementById('floatingButton');
  const floatingToolbar = document.getElementById('floatingToolbar');
  const toggleIcon = document.querySelector('.toggle-icon');
  
  let isToolbarOpen = false;
  
  floatingButton.addEventListener('click', function() {
      isToolbarOpen = !isToolbarOpen;
      
      if (isToolbarOpen) {
          floatingToolbar.classList.add('active');
          toggleIcon.style.transform = 'rotate(180deg)';
      } else {
          floatingToolbar.classList.remove('active');
          toggleIcon.style.transform = 'rotate(0)';
}
});
});

    // Portfolio filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get the filter value
        const filterValue = button.getAttribute('data-filter');
        
        // Filter portfolio items
        portfolioItems.forEach(item => {
          if (filterValue === 'todos' || item.getAttribute('data-category') === filterValue) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
    // FAQ functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      
      question.addEventListener('click', () => {
        // Close all other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });
        
        // Toggle current item
        item.classList.toggle('active');
      });
    });
    
    // Simple clients slider (could be enhanced with a proper carousel)
    const clientLogos = document.querySelectorAll('.client-logo');
    
    function rotateClients() {
      const slider = document.querySelector('.clients-slider');
      const firstLogo = slider.firstElementChild;
      
      slider.appendChild(firstLogo.cloneNode(true));
      slider.removeChild(firstLogo);
    }
    
    // Rotate every 3 seconds
    //setInterval(rotateClients, 3000);
    
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

        // Initialize AOS
        AOS.init({
          duration: 800,
          easing: 'ease-in-out',
          once: true
      });

      // Preloader
      window.addEventListener('load', () => {
          const preloader = document.querySelector('.preloader');
          preloader.classList.add('fade-out');
          setTimeout(() => {
              preloader.style.display = 'none';
          }, 500);
      });

      // Scroll Progress
      window.addEventListener('scroll', () => {
          const scrollProgress = document.querySelector('.scroll-progress-bar');
          const scrollable = document.documentElement.scrollHeight - window.innerHeight;
          const scrolled = window.scrollY;
          const progress = (scrolled / scrollable) * 100;
          scrollProgress.style.width = `${progress}%`;
      });

      // Mobile Menu
      const hamburger = document.querySelector('.hamburger');
      const navLinks = document.querySelector('.nav-links');
      
      hamburger.addEventListener('click', () => {
          navLinks.classList.toggle('active');
      });

      // Stats Counter
      const statsSection = document.querySelector('.stats');
      const statNumbers = document.querySelectorAll('.stat-number');
      let animated = false;

      function animateStats() {
          if (animated) return;
          
          statNumbers.forEach(stat => {
              const target = parseInt(stat.getAttribute('data-count'));
              let current = 0;
              const increment = target / 50;
              const timer = setInterval(() => {
                  current += increment;
                  stat.textContent = Math.floor(current);
                  if (current >= target) {
                      stat.textContent = target;
                      clearInterval(timer);
                  }
              }, 30);
          });
          animated = true;
      }

      // Initialize particles.js
      particlesJS('particles-js', {
          particles: {
              number: {
                  value: 80,
                  density: {
                      enable: true,
                      value_area: 800
                  }
              },
              color: {
                  value: '#ffffff'
              },
              shape: {
                  type: 'circle'
              },
              opacity: {
                  value: 0.5,
                  random: false
              },
              size: {
                  value: 3,
                  random: true
              },
              line_linked: {
                  enable: true,
                  distance: 150,
                  color: '#ffffff',
                  opacity: 0.4,
                  width: 1
              },
              move: {
                  enable: true,
                  speed: 6,
                  direction: 'none',
                  random: false,
                  straight: false,
                  out_mode: 'out',
                  bounce: false
              }
          },
          interactivity: {
              detect_on: 'canvas',
              events: {
                  onhover: {
                      enable: true,
                      mode: 'repulse'
                  },
                  onclick: {
                      enable: true,
                      mode: 'push'
                  },
                  resize: true
              }
          },
          retina_detect: true
      });

      // Intersection Observer for Stats Animation
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  animateStats();
              }
          });
      });

      observer.observe(statsSection);
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

const evaluationQuestions = {
  proyectos: [
      {
          question: "¿Cómo calificaría la planificación de proyectos en su empresa?",
          options: [
              { text: "Básica - Sin metodología clara", value: 25 },
              { text: "Metodología definida pero no siempre seguida", value: 50 },
              { text: "Metodología bien implementada", value: 75 },
              { text: "Metodología optimizada y en mejora continua", value: 100 }
          ]
      },
      {
          question: "¿Qué tan efectivo es el seguimiento y control de proyectos?",
          options: [
              { text: "Seguimiento informal", value: 25 },
              { text: "Seguimiento regular con herramientas básicas", value: 50 },
              { text: "Sistema de seguimiento establecido", value: 75 },
              { text: "Sistema integral con métricas avanzadas", value: 100 }
          ]
      },
      {
          question: "¿Cómo documenta las lecciones aprendidas de los proyectos?",
          options: [
              { text: "No se documentan", value: 25 },
              { text: "Documentación básica", value: 50 },
              { text: "Sistema de documentación establecido", value: 75 },
              { text: "Base de conocimiento completa y actualizada", value: 100 }
          ]
      },
      {
          question: "¿Cómo gestiona los recursos humanos en los proyectos?",
          options: [
              { text: "Asignación informal", value: 25 },
              { text: "Asignación básica según disponibilidad", value: 50 },
              { text: "Sistema de gestión de recursos", value: 75 },
              { text: "Gestión optimizada de capacidades", value: 100 }
          ]
      },
      {
          question: "¿Cómo maneja los cambios en el alcance del proyecto?",
          options: [
              { text: "Sin control de cambios", value: 25 },
              { text: "Proceso básico de control", value: 50 },
              { text: "Sistema formal de control de cambios", value: 75 },
              { text: "Gestión integral de cambios", value: 100 }
          ]
      },
      {
          question: "¿Cómo gestiona la comunicación en los proyectos?",
          options: [
              { text: "Comunicación informal", value: 25 },
              { text: "Canales básicos establecidos", value: 50 },
              { text: "Plan de comunicación definido", value: 75 },
              { text: "Comunicación efectiva y multicanal", value: 100 }
          ]
      },
      {
          question: "¿Cómo maneja la calidad en los proyectos?",
          options: [
              { text: "Sin control de calidad formal", value: 25 },
              { text: "Controles básicos de calidad", value: 50 },
              { text: "Sistema de calidad implementado", value: 75 },
              { text: "Gestión integral de calidad", value: 100 }
          ]
      },
      {
          question: "¿Cómo gestiona los costos del proyecto?",
          options: [
              { text: "Control básico de gastos", value: 25 },
              { text: "Seguimiento regular de costos", value: 50 },
              { text: "Sistema de control de costos", value: 75 },
              { text: "Gestión financiera integral", value: 100 }
          ]
      },
      {
          question: "¿Cómo maneja los stakeholders del proyecto?",
          options: [
              { text: "Sin gestión formal", value: 25 },
              { text: "Identificación básica", value: 50 },
              { text: "Plan de gestión establecido", value: 75 },
              { text: "Gestión estratégica de stakeholders", value: 100 }
          ]
      },
      {
          question: "¿Cómo gestiona la documentación del proyecto?",
          options: [
              { text: "Documentación mínima", value: 25 },
              { text: "Documentación básica", value: 50 },
              { text: "Sistema de gestión documental", value: 75 },
              { text: "Gestión documental integral", value: 100 }
          ]
      },
      {
          question: "¿Cómo maneja los riesgos del proyecto?",
          options: [
              { text: "Sin gestión de riesgos", value: 25 },
              { text: "Identificación básica", value: 50 },
              { text: "Plan de riesgos implementado", value: 75 },
              { text: "Gestión proactiva de riesgos", value: 100 }
          ]
      },
      {
          question: "¿Cómo gestiona el cronograma del proyecto?",
          options: [
              { text: "Control informal de tiempos", value: 25 },
              { text: "Cronograma básico", value: 50 },
              { text: "Sistema de control de tiempos", value: 75 },
              { text: "Gestión integral de cronograma", value: 100 }
          ]
      },
      {
          question: "¿Cómo maneja las adquisiciones del proyecto?",
          options: [
              { text: "Proceso informal", value: 25 },
              { text: "Proceso básico establecido", value: 50 },
              { text: "Sistema de adquisiciones", value: 75 },
              { text: "Gestión estratégica de compras", value: 100 }
          ]
      },
      {
          question: "¿Cómo gestiona la integración del proyecto?",
          options: [
              { text: "Sin integración formal", value: 25 },
              { text: "Integración básica", value: 50 },
              { text: "Plan de integración definido", value: 75 },
              { text: "Integración completa y efectiva", value:100 }
          ]
      },
      {
          question: "¿Cómo maneja los conflictos en el proyecto?",
          options: [
              { text: "Sin proceso formal", value: 25 },
              { text: "Resolución básica", value: 50 },
              { text: "Sistema de resolución establecido", value: 75 },
              { text: "Gestión proactiva de conflictos", value: 100 }
          ]
      },
      {
          question: "¿Cómo gestiona el conocimiento en los proyectos?",
          options: [
              { text: "Sin gestión formal", value: 25 },
              { text: "Documentación básica", value: 50 },
              { text: "Sistema de gestión establecido", value: 75 },
              { text: "Gestión integral del conocimiento", value: 100 }
          ]
      },
      {
          question: "¿Cómo maneja la satisfacción del cliente?",
          options: [
              { text: "Sin medición formal", value: 25 },
              { text: "Medición básica", value: 50 },
              { text: "Sistema de medición establecido", value: 75 },
              { text: "Gestión integral de satisfacción", value: 100 }
          ]
      },
      {
          question: "¿Cómo gestiona la innovación en los proyectos?",
          options: [
              { text: "Sin enfoque en innovación", value: 25 },
              { text: "Innovación ocasional", value: 50 },
              { text: "Proceso de innovación definido", value: 75 },
              { text: "Cultura de innovación establecida", value: 100 }
          ]
      },
      {
          question: "¿Cómo maneja la sostenibilidad en los proyectos?",
          options: [
              { text: "Sin consideración formal", value: 25 },
              { text: "Consideración básica", value: 50 },
              { text: "Plan de sostenibilidad", value: 75 },
              { text: "Gestión integral sostenible", value: 100 }
          ]
      },
      {
          question: "¿Cómo gestiona el cierre de los proyectos?",
          options: [
              { text: "Cierre informal", value: 25 },
              { text: "Proceso básico de cierre", value: 50 },
              { text: "Sistema de cierre establecido", value: 75 },
              { text: "Gestión integral de cierre", value: 100 }
          ]
      }
  ],
  digitalizacion: [
      {
          question: "¿Cuál es el nivel de implementación digital en sus procesos?",
          options: [
              { text: "Procesos mayormente manuales", value: 25 },
              { text: "Algunos procesos digitalizados", value: 50 },
              { text: "Mayoría de procesos digitalizados", value: 75 },
              { text: "Transformación digital completa", value: 100 }
          ]
      },
      // Añadir las 19 preguntas restantes para digitalización...
  ],
  innovacion: [
      {
          question: "¿Cómo es el proceso de innovación en su empresa?",
          options: [
              { text: "Innovación ocasional", value: 25 },
              { text: "Innovación regular no estructurada", value: 50 },
              { text: "Proceso de innovación definido", value: 75 },
              { text: "Cultura de innovación establecida", value: 100 }
          ]
      },
      // Añadir las 19 preguntas restantes para innovación...
  ],
  impulso: [
      {
          question: "¿Cuál es su estrategia de crecimiento empresarial?",
          options: [
              { text: "Sin estrategia definida", value: 25 },
              { text: "Estrategia básica", value: 50 },
              { text: "Estrategia clara y medible", value: 75 },
              { text: "Estrategia integral y adaptativa", value: 100 }
          ]
      },
      // Añadir las 19 preguntas restantes para impulso...
  ]
};

      const resultMessages = {
          low: {
              proyectos: "Su gestión de proyectos necesita una restructuración importante. Recomendamos implementar metodologías ágiles y herramientas de seguimiento.",
              digitalizacion: "Es crucial iniciar un proceso de transformación digital. Sugerimos comenzar con la digitalización de procesos críticos.",
              innovacion: "La innovación es clave para la supervivencia. Recomendamos establecer un programa de innovación estructurado.",
              impulso: "Su empresa necesita un plan de desarrollo empresarial sólido. Sugerimos definir objetivos claros y estrategias de crecimiento."
          },
          medium: {
              proyectos: "Hay bases sólidas pero espacio para mejorar. Considere optimizar el seguimiento y la gestión de riesgos.",
              digitalizacion: "Buen avance en digitalización. Recomendamos expandir la implementación a más áreas del negocio.",
              innovacion: "Su empresa muestra potencial innovador. Sugerimos formalizar los procesos de I+D.",
              impulso: "Está en buen camino. Recomendamos fortalecer las estrategias de expansión y desarrollo de talento."
          },
          high: {
              proyectos: "Excelente gestión de proyectos. Considere implementar mejoras continuas y optimización de procesos.",
              digitalizacion: "Gran nivel de digitalización. Manténgase actualizado con las últimas tendencias tecnológicas.",
              innovacion: "Fuerte cultura de innovación. Siga invirtiendo en I+D y nuevas tecnologías.",
              impulso: "Impresionante desarrollo empresarial. Explore nuevos mercados y oportunidades de crecimiento."
          },
          excellent: {
              proyectos: "Nivel excepcional de gestión de proyectos. Considere compartir mejores prácticas y mentoría.",
              digitalizacion: "Líder en transformación digital. Mantenga el impulso y explore tecnologías emergentes.",
              innovacion: "Referente en innovación. Siga estableciendo nuevos estándares en su industria.",
              impulso: "Modelo de excelencia empresarial. Continue expandiendo su impacto en el mercado."
          }
      };

      let currentService = '';
      let selectedOptions = {};

      document.querySelectorAll('.service-card').forEach(card => {
          card.addEventListener('click', () => {
              currentService = card.dataset.service;
              showEvaluationForm();
          });
      });

      function showEvaluationForm() {
  document.querySelector('.services-grid').style.display = 'none';
  document.querySelector('.evaluation-form').style.display = 'block';
  document.querySelector('.result').style.display = 'none';
  selectedOptions = {};
  
  const questionsContainer = document.getElementById('questions');
  questionsContainer.innerHTML = '';
  
  evaluationQuestions[currentService].forEach((q, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.className = 'question';
      
      const questionText = document.createElement('h3');
      questionText.textContent = q.question;
      questionDiv.appendChild(questionText);
      
      const optionsDiv = document.createElement('div');
      optionsDiv.className = 'options';
      
      q.options.forEach((opt, optIndex) => {
          const option = document.createElement('div');
          option.className = 'option';
          option.textContent = opt.text;
          option.onclick = () => selectOption(index, optIndex, option);
          optionsDiv.appendChild(option);
      });
      
      questionDiv.appendChild(optionsDiv);
      questionsContainer.appendChild(questionDiv);
  });
}

function selectOption(questionIndex, optionIndex, element) {
  // Remove selected class from siblings
  const siblings = element.parentElement.children;
  Array.from(siblings).forEach(sib => sib.classList.remove('selected'));
  
  // Add selected class to clicked option
  element.classList.add('selected');
  
  // Store selected value
  selectedOptions[questionIndex] = evaluationQuestions[currentService][questionIndex].options[optionIndex].value;
}

function calculateResults() {
  const companyName = document.getElementById('companyName').value;
  const companyEmail = document.getElementById('companyEmail').value;
  
  if (!companyName || !companyEmail) {
      alert('Por favor complete la información de la empresa');
      return;
  }
  
  if (Object.keys(selectedOptions).length < evaluationQuestions[currentService].length) {
      alert('Por favor responda todas las preguntas');
      return;
  }
  
  const totalScore = Object.values(selectedOptions).reduce((sum, value) => sum + value, 0);
  const averageScore = totalScore / evaluationQuestions[currentService].length;
  
  let category;
  if (averageScore <= 40) category = 'low';
  else if (averageScore <= 60) category = 'medium';
  else if (averageScore <= 80) category = 'high';
  else category = 'excellent';
  
  showResults(averageScore, category);
}

function showResults(score, category) {
  document.querySelector('.evaluation-form').style.display = 'none';
  const resultDiv = document.querySelector('.result');
  resultDiv.style.display = 'block';
  
  const scoreDiv = resultDiv.querySelector('.result-score');
  scoreDiv.textContent = `${Math.round(score)}%`;
  
  const messageDiv = resultDiv.querySelector('.result-message');
  messageDiv.textContent = resultMessages[category][currentService];
  
  // Add score-based styling
  scoreDiv.style.color = getScoreColor(score);
}

function getScoreColor(score) {
  if (score <= 40) return 'var(--danger-color)';
  if (score <= 60) return 'var(--warning-color)';
  if (score <= 80) return 'var(--primary-color)';
  return 'var(--success-color)';
}

function resetEvaluation() {
  document.querySelector('.result').style.display = 'none';
  document.querySelector('.services-grid').style.display = 'grid';
  document.getElementById('companyName').value = '';
  document.getElementById('companyEmail').value = '';
  selectedOptions = {};
  currentService = '';
}

// Initialize event listeners when the document loads
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.service-card').forEach(card => {
      card.addEventListener('click', () => {
          currentService = card.dataset.service;
          showEvaluationForm();
      });
  });
});
 document.addEventListener('DOMContentLoaded', function() {
            // Inicializar AOS para animaciones de scroll
            if (typeof AOS !== 'undefined') {
                AOS.init({
                    duration: 800,
                    once: true,
                    offset: 50
                });
            }
            
            // Funcionalidad para el carrusel de actualizaciones destacadas
            const carousel = document.getElementById('featuredCarousel');
            const slides = carousel.querySelectorAll('.carousel-slide');
            const prevBtn = document.getElementById('featuredPrev');
            const nextBtn = document.getElementById('featuredNext');
            const indicators = document.getElementById('featuredIndicators').querySelectorAll('.indicator');
            
            let currentSlide = 0;
            
            function showSlide(index) {
                slides[currentSlide].classList.remove('active');
                indicators[currentSlide].classList.remove('active');
                
                currentSlide = (index + slides.length) % slides.length;
                
                slides[currentSlide].classList.add('active');
                indicators[currentSlide].classList.add('active');
            }
            
            prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
            nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
            
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => showSlide(index));
            });
            
            let carouselInterval = setInterval(() => showSlide(currentSlide + 1), 10000);
            
            carousel.addEventListener('mouseenter', () => clearInterval(carouselInterval));
            carousel.addEventListener('mouseleave', () => {
                carouselInterval = setInterval(() => showSlide(currentSlide + 1), 10000);
            });
        });

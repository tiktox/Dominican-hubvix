
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
 
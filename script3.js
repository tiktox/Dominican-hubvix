
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
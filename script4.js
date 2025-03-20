
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
  
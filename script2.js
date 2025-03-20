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
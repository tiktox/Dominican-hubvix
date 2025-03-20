
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

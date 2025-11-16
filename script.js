// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Reservation form handling
document.addEventListener('DOMContentLoaded', function() {
    const reservationForm = document.querySelector('.reservation-form');
    const reserveBtn = document.querySelector('.reserve-btn');

    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const reservationData = Object.fromEntries(formData);

            // Simple validation
            const requiredFields = ['name', 'email', 'phone', 'date', 'time', 'guests'];
            let isValid = true;

            requiredFields.forEach(field => {
                const element = document.getElementById(field);
                if (!element.value.trim()) {
                    element.style.borderColor = '#ff6b6b';
                    isValid = false;
                } else {
                    element.style.borderColor = '#ddd';
                }
            });

            if (isValid) {
                // Simulate form submission
                alert('Merci pour votre réservation ! Nous vous contacterons bientôt pour confirmer.');
                this.reset();
            } else {
                alert('Veuillez remplir tous les champs obligatoires.');
            }
        });
    }

    // Reserve button in header scrolls to reservation section
    if (reserveBtn) {
        reserveBtn.addEventListener('click', function() {
            const reservationSection = document.getElementById('reservation');
            if (reservationSection) {
                reservationSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // CTA button in hero scrolls to menu
    const ctaBtn = document.querySelector('.cta-btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', function() {
            const menuSection = document.getElementById('menu');
            if (menuSection) {
                menuSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(section);
    });

    // Gallery hover effects
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Form input focus effects
    const formInputs = document.querySelectorAll('.reservation-form input, .reservation-form select');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
        });

        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
        });
    });
});

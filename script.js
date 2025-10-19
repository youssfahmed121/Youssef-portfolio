// Smooth Scroll
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

// Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('شكراً لرسالتك! سأرد عليك قريباً 😊');
        contactForm.reset();
    });
}

// Animate skill bars on scroll
const skillCards = document.querySelectorAll('.skill-card');
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const levelFill = entry.target.querySelector('.level-fill');
            if (levelFill) {
                const width = levelFill.style.width;
                levelFill.style.width = '0%';
                setTimeout(() => {
                    levelFill.style.width = width;
                }, 100);
            }
        }
    });
}, observerOptions);

skillCards.forEach(card => observer.observe(card));

// Optional: Add JavaScript for interactive functionality

document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-button');
    const aboutSections = document.querySelectorAll('.about-section');

    navButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Remove '#'
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                aboutSections.forEach(section => {
                    section.classList.remove('active');
                });

                targetSection.classList.add('active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleModeBtn = document.querySelector('.toggle-mode');
    const body = document.body;
    const navLinks = document.querySelector('.nav-links');
    const hamburgerMenu = document.querySelector('.hamburger-menu');

    // Ensure all elements exist
    if (toggleModeBtn && body && navLinks && hamburgerMenu) {
        toggleModeBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
        });

        hamburgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });

                // Close the menu if it's open
                navLinks.classList.remove('active');
                hamburgerMenu.classList.remove('active');
            });
        });
    } else {
        console.error('One or more elements not found:', { toggleModeBtn, body, navLinks, hamburgerMenu });
    }
});

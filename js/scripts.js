// Smooth Scrolling for anchor links
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    function smoothScroll(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: 'smooth'
        });

        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    }
});

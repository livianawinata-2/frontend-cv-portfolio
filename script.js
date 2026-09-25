const menuBtn = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.navbar a');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});
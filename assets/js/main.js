// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => nav.classList.remove('open'));
    });
}

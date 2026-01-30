
(function () {
const btn = document.querySelector('.nav__toggle');
const menu = document.querySelector('#navMenu');

if (!btn || !menu) return;

btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', String(isOpen));
});

// Close menu when clicking a link
menu.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'a') {
    menu.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    }
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menu.classList.contains('is-open')) return;
    const clickedInside = menu.contains(e.target) || btn.contains(e.target);
    if (!clickedInside) {
    menu.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    }
});
})();

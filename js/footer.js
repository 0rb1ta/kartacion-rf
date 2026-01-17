document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer.footer');
    const btn = document.getElementById('footerToggle');

    if (footer && btn) {
        btn.addEventListener('click', () => footer.classList.toggle('is-open'));
    }
});

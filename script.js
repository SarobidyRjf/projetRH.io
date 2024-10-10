// script.js

// Ajouter un effet de scroll fluide lorsqu'on clique sur les liens du menu
document.querySelectorAll('a[href^="#"]').forEach(lien => {
    lien.addEventListener('click', function(e) {
        e.preventDefault();
        const cible = document.querySelector(this.getAttribute('href'));
        cible.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

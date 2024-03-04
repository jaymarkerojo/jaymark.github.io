const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const href = link.getAttribute('href');
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseover', e => {
        card.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseout', e => {
        card.style.transform = 'scale(1)';
    });
});
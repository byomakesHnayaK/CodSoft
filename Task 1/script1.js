// Smooth Scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate financial highlights on scroll
window.addEventListener('scroll', function() {
    const highlightItems = document.querySelectorAll('.highlight-item');
    const scrollPosition = window.scrollY + window.innerHeight;

    highlightItems.forEach(item => {
        if (item.getBoundingClientRect().top + window.scrollY < scrollPosition) {
            item.style.transform = 'translateY(0)';
            item.style.opacity = '1';
        } else {
            item.style.transform = 'translateY(50px)';
            item.style.opacity = '0';
        }
    });
});

// Initial animation for financial highlights
document.addEventListener('DOMContentLoaded', () => {
    const highlightItems = document.querySelectorAll('.highlight-item');
    highlightItems.forEach(item => {
        item.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
        item.style.transform = 'translateY(50px)';
        item.style.opacity = '0';
    });
});

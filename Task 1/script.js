// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    } else {
        header.style.background = 'red';
        header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    }
});

// Search input animation
const searchInput = document.querySelector('main section:first-child input');
searchInput.addEventListener('focus', () => {
    searchInput.style.transform = 'scale(1.02)';
    searchInput.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
});

searchInput.addEventListener('blur', () => {
    searchInput.style.transform = 'scale(1)';
    searchInput.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
});

// Animate features on scroll
const features = document.querySelectorAll('.feature');

const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const featureObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initial setup for features
features.forEach(feature => {
    feature.style.opacity = '0';
    feature.style.transform = 'translateY(20px)';
    feature.style.transition = 'all 0.6s ease-out';
    featureObserver.observe(feature);
});

// Hero section parallax effect
const heroImage = document.querySelector('main section:first-child img');
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < 500) {  // Only apply parallax within hero section
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('header a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('/')) {
            // Add a subtle transition effect before page navigation
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.3s ease';
            setTimeout(() => {
                window.location.href = href;
            }, 300);
            e.preventDefault();
        }
    });
});

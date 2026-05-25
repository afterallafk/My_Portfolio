// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Close mobile menu on click
        document.getElementById('navMenu').classList.remove('open');
    });
});

// Toggle hamburger menu
function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('open');
}

// Active nav highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
            });
        }
    });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => navObserver.observe(s));

// Fade-in sections on scroll
const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { rootMargin: '0px 0px -80px 0px' });

document.querySelectorAll('.section').forEach(section => fadeObserver.observe(section));

// Header shadow on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
    scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
});

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Particles.js config
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 900 } },
        color: { value: ["#4f9cf9", "#a78bfa", "#ffffff"] },
        shape: { type: "circle" },
        opacity: { value: 0.45, random: true, anim: { enable: true, speed: 0.5, opacity_min: 0.1 } },
        size: { value: 2.5, random: true },
        line_linked: {
            enable: true,
            distance: 140,
            color: "#4f9cf9",
            opacity: 0.15,
            width: 1
        },
        move: {
            enable: true,
            speed: 1.8,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out"
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 160, line_linked: { opacity: 0.5 } },
            push: { particles_nb: 3 }
        }
    },
    retina_detect: true
});
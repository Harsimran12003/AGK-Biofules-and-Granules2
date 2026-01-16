// Initialize Animations
AOS.init({ duration: 1200, once: true });

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    // --- 1. THEME SYNC (Persistence) ---
    // Check if a theme was saved in a previous session or page
    // --- 1. THEME SYNC (Persistence) ---
// Default to dark if no preference is saved
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
    body.classList.add('light-mode');
} else {
    body.classList.remove('light-mode');
}

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            // Save choice so About.html can see it
            localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
        });
    }

    // --- 2. MOBILE NAV (Hamburger) ---
    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('open');
        });
    }

    // Close mobile menu when clicking any link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // --- 3. SCROLL EFFECTS ---
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (nav) {
            nav.style.boxShadow = window.scrollY > 50 ? "0 10px 30px rgba(0,0,0,0.3)" : "none";
        }
    });
});

// --- 4. POPUP LOGIC (Index Page Only) ---
function openPopup(id) {
    document.getElementById("popupOverlay")?.classList.add("active");
    document.getElementById(id)?.classList.add("active");
}

function closePopup() {
    document.getElementById("popupOverlay")?.classList.remove("active");
    document.querySelectorAll(".popup").forEach(p => p.classList.remove("active"));
}

// Inside your DOMContentLoaded in main.js
if (mobileMenu && navLinks) {
    mobileMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        
        // Animate the 3 lines into an X
        mobileMenu.classList.toggle('open');
    });
}

// Add this inside your DOMContentLoaded listener in main.js
const bgLogo = document.querySelector('.big-bg-logo');
if (bgLogo) {
    // This forces Hardware Acceleration to keep the image sharp during animations
    bgLogo.style.transform = 'translateZ(0)';
    bgLogo.style.backfaceVisibility = 'hidden';
}

// Fix for blurry logo during animations
const heroLogo = document.querySelector('.bio-leaf-core img');
if (heroLogo) {
    // Forces the GPU to handle rendering, which prevents sub-pixel blurring
    heroLogo.style.transform = 'translateZ(0)';
}

/// --- 5. CONTACT FORM EMAIL LOGIC ---
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const btn = contactForm.querySelector('button');
        const originalText = btn.innerHTML;
        
        // Visual feedback
        btn.innerHTML = "Sending...";
        btn.disabled = true;

const serviceID = 'service_uqwbgws';
const templateID = 'template_02z45cl';

emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        alert('Success! Your message has been sent to Gabriel.');
        contactForm.reset();
        btn.innerHTML = originalText;
        btn.disabled = false;
    }, (error) => {
        alert('Send failed. Check your Template ID and field names.');
        console.log('Error:', error);
        btn.innerHTML = originalText;
        btn.disabled = false;
    });
    });
}

const bgLogoImg = document.querySelector('.hero-bg-logo img');
if (bgLogoImg) {
    // Force the browser to round to whole pixels
    bgLogoImg.style.transform = 'translate3d(0,0,0)'; 
    // Disable smooth interpolation which causes the 'fuzzy' look
    bgLogoImg.style.imageRendering = 'optimizeQuality';
}

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("open");
});

/* Close menu on link click (mobile UX) */
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("open");
  });
});



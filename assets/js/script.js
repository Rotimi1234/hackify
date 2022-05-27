'use strict';

/**
 * navbar variables
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const heder = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  heder.classList.toggle("active");
});



const sr = ScrollReveal ({
  distance: '60px',
  duration: 2500,
  delay: 400,
  opacity: 0.2
})

sr.reveal('.hero-title, .logo, .section-text, .features-content-subtitle, .hero-text, .about-content, .section-title, .section-text',{delay: 400, origin: 'left'})

sr.reveal('.form-text, .footer-link, .contact-list, .features-content-text, .features-content-title, .hero-form, .features-banner',{delay: 400, origin: 'right'})

sr.reveal('.hero-banner, .social-link, .footer-text, .contact-form, .blog-card, .features-list, .btn-group, .about-card',{delay: 400, origin: 'bottom'})

sr.reveal('.footer-link-box',{delay: 400, origin: 'top'})


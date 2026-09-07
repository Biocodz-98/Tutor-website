// Mobile Menu Toggle
const MobileMenuItems = document.querySelector('.navbar .mobile-menu-items');
const MobileToggle = document.querySelector('.navbar .mobile-menu-toggle');

document.addEventListener('DOMContentLoaded', () => {
  MobileToggle.addEventListener('click', () => {
    MobileMenuItems.classList.toggle('active');
  });
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  window.scrollY > 0
    ? navbar.classList.add('navbar-scroll')
    : navbar.classList.remove('navbar-scroll');
});

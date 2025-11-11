//  Feature 1: Hero Typing Animation 
document.addEventListener("DOMContentLoaded", () => {
  const heading = document.getElementById("hero-heading");
  const texts = [
    "Transform Your Business",
    "Empower Your Digital Presence",
    "Innovate with Nexura",
    "Build. Design. Succeed."
  ];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  function typeEffect() {
    const currentText = texts[textIndex];
    if (!isDeleting && charIndex < currentText.length) {
      heading.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      setTimeout(typeEffect, 100);
    } 
    else if (isDeleting && charIndex > 0) {
      heading.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeEffect, 60);
    } 
    else {
      if (!isDeleting) {
        setTimeout(() => isDeleting = true, 1000);
      } else {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
      setTimeout(typeEffect, 1000);
    }
  }
  typeEffect();
});
//  Feature 2: Scroll Reveal Animation 
const revealElements = document.querySelectorAll('.service-card');
window.addEventListener('scroll', () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('show');
    }
  });
});
//  Feature 3: Smooth Scroll Navigation 
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
//  Feature 4: Dark/Light Mode Toggle 
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
  });
}
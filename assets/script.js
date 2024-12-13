// script.js

// Function to detect when elements come into view and add classes for animation
function animateOnScroll() {
  // Animate About Us images
  const images = document.querySelectorAll("#about img");
  images.forEach((img) => {
      const rect = img.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          img.classList.add("animate"); // Add animation class when the image is in view
      }
  });

  // Animate Our Services cards
  const cards = document.querySelectorAll("#services .card");
  cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          card.classList.add("animate"); // Add animation class when the card is in view
      }
  });
}

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    let isHovered = false;

    carousel.addEventListener('mouseenter', () => (isHovered = true));
    carousel.addEventListener('mouseleave', () => (isHovered = false));

    setInterval(() => {
        if (!isHovered) {
            carousel.style.transform = `translateX(${
                (parseInt(getComputedStyle(carousel).transform.split(',')[4]) || 0) - 300
            }px)`;
        }
    }, 3000);
});


// Banner Auto-Slide
let currentSlide = 0;
const slides = document.querySelectorAll('.banner .slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Start auto-slide
setInterval(nextSlide, 3000);

// Form Validation
document.getElementById('contactForm').addEventListener('submit', function (event) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const destination = document.getElementById('destination').value;

  if (!name || !email || !destination) {
    alert('All fields are required!');
    event.preventDefault();
  } else {
    alert('Form submitted successfully!');
  }
});

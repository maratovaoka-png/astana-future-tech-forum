console.log("Astana Future Tech Forum project loaded");

const ticketButtons = document.querySelectorAll('.ticket-card .btn');
const heroButton = document.querySelector('.btn-primary');

ticketButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Registration feature can be connected later.');
  });
});

if (heroButton) {
  heroButton.addEventListener('click', (event) => {
    event.preventDefault();

    const ticketsSection = document.querySelector('#tickets');
    if (ticketsSection) {
      ticketsSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
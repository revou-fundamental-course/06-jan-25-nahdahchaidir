const userName = prompt("What's your name?");
    if (userName) {
      document.getElementById('welcome-message').textContent = `Hi ${userName}, welcome to my website!`;
    } else {
      document.getElementById('welcome-message').textContent = 'Hi there, welcome to my website!';
    }

const slider = document.getElementById('slider');
const slides = slider.children;
let currentIndex = 0;

function autoSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    const slideWidth = slider.offsetWidth;
    slider.scrollTo({
    left: currentIndex * slideWidth,
    behavior: 'smooth',
    });
}

setInterval(autoSlide, 2000);

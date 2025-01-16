// Banner Autoslide
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

// Toggle & Responsive Navigation
const navSlide = () => {
    const burger = document.querySelector(".burger")
    const navLists = document.querySelector("nav")

    burger.addEventListener("click", () => {
        navLists.classList.toggle("nav-active")
        burger.classList.toggle("toggle-burger")
    })
}


// Clear form before upload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
}


const navToggleBtn = document.querySelector(".nav-toggle-btn");
const nav = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-link");
navToggleBtn.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
  document.body.classList.toggle("stop-scrolling");

  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    navToggleBtn.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggleBtn.setAttribute("aria-expanded", false);
  }

  navLinks.forEach((element) => {
    element.addEventListener("click", () => {
      nav.setAttribute("data-visible", false);
      navToggleBtn.setAttribute("aria-expanded", false);
      document.body.classList.remove("stop-scrolling");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".nav-toggle-btn");
  const line1 = document.querySelector(".line1");
  const line3 = document.querySelector(".line3");

  container.addEventListener("click", () => {
    container.classList.toggle("active");
    line1.classList.toggle("active");
    line3.classList.toggle("active");
  });
});

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;
let intervalId;

function updateSlidePosition() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.toggle("active", i === currentSlide);
    dots[i].classList.toggle("active", i === currentSlide);
  }
}

function goToSlide(index) {
  currentSlide = index;
  updateSlidePosition();
}

function nextSlide() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  updateSlidePosition();
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = slides.length - 1;
  }
  updateSlidePosition();
}

intervalId = setInterval(nextSlide, 2500);

document
  .querySelector(".carousel-wrapper")
  .addEventListener("mouseover", () => {
    clearInterval(intervalId);
  });

document.querySelector(".carousel-wrapper").addEventListener("mouseout", () => {
  intervalId = setInterval(nextSlide, 2500);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    goToSlide(index);
    clearInterval(intervalId);
  });
});

document.getElementById("right-arrow").addEventListener("click", () => {
  clearInterval(intervalId);
  nextSlide();
});

document.getElementById("left-arrow").addEventListener("click", () => {
  clearInterval(intervalId);
  prevSlide();
});

updateSlidePosition();

const faqs = document.querySelectorAll(".faq");

faqs.forEach((listElement) => {
  listElement.addEventListener("click", () => {
    if (listElement.classList.contains("active")) {
      listElement.classList.remove("active");
    } else {
      faqs.forEach((listE) => {
        listE.classList.remove("active");
      });
      listElement.classList.toggle("active");
    }
  });
});

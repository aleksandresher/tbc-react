const navToggleBtn = document.querySelector(".nav-toggle-btn");
const nav = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-link");
const line1 = document.querySelector(".line1");
const line3 = document.querySelector(".line3");
const program = document.querySelector(".programm-description-wrapper");
const imgContainer = document.querySelector(".img-container");
const header = document.querySelector(".header");

navToggleBtn.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
  document.body.classList.toggle("stop-scrolling");
  program.classList.toggle("as-background");
  imgContainer.classList.toggle("as-background");

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

let prevScrollpos = window.scrollY;
let threshold = 80;

window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  if (Math.abs(prevScrollpos - currentScrollPos) > threshold) {
    if (prevScrollpos > currentScrollPos) {
      header.style.top = "0";
    } else {
      header.style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
  }
};
document.addEventListener("click", (event) => {
  const isClickInsideNav =
    navToggleBtn.contains(event.target) || nav.contains(event.target);
  if (!isClickInsideNav && nav.getAttribute("data-visible") === "true") {
    nav.setAttribute("data-visible", "false");

    navToggleBtn.classList.toggle("active");
    document.body.classList.remove("stop-scrolling");
    line1.classList.toggle("active");
    line3.classList.toggle("active");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  navToggleBtn.addEventListener("click", () => {
    navToggleBtn.classList.toggle("active");
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

const rules = document.querySelector(".rules");
const rulesBtns = document.querySelectorAll(".rules-close-x");

rulesBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    rules.setAttribute("data-visible", false);
  });
});

const rulesMain = document.getElementById("footer-rules-toggle");

rulesMain.addEventListener("click", () => {
  const visibility = rules.getAttribute("data-visible");
  console.log(visibility);
  if (visibility === "false") {
    rules.setAttribute("data-visible", true);
    document.body.classList.add("body-as-background");
  } else {
    rules.setAttribute("data-visible", false);
    document.body.classList.remove("body-as-background");
  }
});

document.addEventListener("click", (event) => {
  const isClickInsideRules =
    rules.contains(event.target) || rulesMain.contains(event.target);
  if (!isClickInsideRules) {
    rules.setAttribute("data-visible", "false");
    document.body.classList.remove("body-as-background");
  }
});

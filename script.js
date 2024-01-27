const toggleBtn = document.getElementsByClassName("nav-toggle-btn")[0];
const navList = document.getElementsByClassName("nav")[0];

toggleBtn.addEventListener("click", () => {
  if (navList.style.display === "flex") {
    navList.style.display = "none";
  } else {
    navList.style.display = "flex";
  }
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

intervalId = setInterval(nextSlide, 3000);

document
  .querySelector(".carousel-wrapper")
  .addEventListener("mouseover", () => {
    clearInterval(intervalId);
  });

document.querySelector(".carousel-wrapper").addEventListener("mouseout", () => {
  intervalId = setInterval(nextSlide, 3000);
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

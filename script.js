const toggleBtn = document.getElementsByClassName("nav-toggle-btn")[0];
const navList = document.getElementsByClassName("nav")[0];

toggleBtn.addEventListener("click", () => {
  if (navList.style.display === "flex") {
    navList.style.display = "none";
  } else {
    navList.style.display = "flex";
  }
});

const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const slideWrapper = document.querySelector(".content_inner_slider");

const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
console.log(totalSlides);
let currentSlide = 0;

function updateSlidePosition() {
  for (let i = 0; i < totalSlides; i++) {
    slides[i].style.transform = `translateX(-${currentSlide * 100}%)`;
  }
}
leftArrow.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlidePosition();
    console.log("left clicked");
  }
});

rightArrow.addEventListener("click", () => {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    updateSlidePosition();
    console.log("right clicked");
  }
});

const faqs = document.querySelectorAll(".faq");

// faqs.forEach((faq) => {
//   faq.addEventListener("click", () => {
//     faq.classList.toggle("active");
//   });
// });

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

const refs = {
  container: document.querySelector(".container"),
  upBtn: document.querySelector(".up-button"),
  downBtn: document.querySelector(".down-button"),
  sidebar: document.querySelector(".sidebar"),
  slidesBlock: document.querySelector(".main-slides"),
  slides: document.querySelectorAll(".slide"),
};

const slidesQuantity = refs.slides.length;

refs.sidebar.style.top = `-${(slidesQuantity - 1) * 100}vh`;

let activeSlide = 0;

refs.upBtn.addEventListener("click", () => {
  changeSlide("up");
});
refs.downBtn.addEventListener("click", () => {
  changeSlide("down");
});

function changeSlide(direction) {
  if (direction === "up") {
    activeSlide += 1;
    if (activeSlide === slidesQuantity) {
      activeSlide = 0;
    }
  } else if (direction === "down") {
    activeSlide -= 1;
    if (activeSlide < 0) {
      activeSlide = slidesQuantity - 1;
    }
  }

  const height = refs.container.clientHeight;

  refs.slidesBlock.style.transform = `translateY(-${height * activeSlide}px)`;
  refs.sidebar.style.transform = `translateY(${height * activeSlide}px)`;
}

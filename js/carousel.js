// Getting the arrows
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
const carouselItems = document.getElementsByClassName("carousel__item");
const carouselDots = document.getElementsByClassName("dot");

// > Get Carousel Size
let activeIndex = 0;
const carouselSize = carouselItems.length;

// > Add eventListeners on dots
let dotIndex = 0;
for (let dot of carouselDots) {
  let x = dotIndex;
  dot.onclick = () => {
    setActive(x);
  };
  dotIndex++;
}

// > Add eventListeners on arrows
arrowLeft.addEventListener("click", () => {
  console.log("left");
  setActivePrev();
});

arrowRight.addEventListener("click", () => {
  console.log("right");
  setActiveNext();
});

// > Function for arrwos
const setActiveNext = () => {
  let newActiveIndex = activeIndex + 1;
  if (newActiveIndex >= carouselSize) newActiveIndex = 0;
  setActive(newActiveIndex);
};
const setActivePrev = () => {
  let newActiveIndex = activeIndex - 1;
  if (newActiveIndex < 0) newActiveIndex = carouselSize - 1;
  setActive(newActiveIndex);
};

// > General function for setting active index
const setActive = (newActiveIndex) => {
  carouselItems[activeIndex].classList.remove("active");
  carouselDots[activeIndex].classList.remove("active");
  carouselItems[newActiveIndex].classList.add("active");
  carouselDots[newActiveIndex].classList.add("active");
  activeIndex = newActiveIndex;
};

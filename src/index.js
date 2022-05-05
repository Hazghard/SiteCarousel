import "./style.css";

window.addEventListener("DOMContentLoaded", () => {
  scrollToTop();

  //ul selector
  const track = document.querySelector(".carouselTrack");
  //img tracks in array
  const slides = Array.from(track.children);
  console.log("slides", slides);

  //buttons selector
  const prevBtn = document.querySelector(".carouselButtonLeft");
  const nextBtn = document.querySelector(".carouselButtonRight");
  //dots selector
  const dotsNav = document.querySelector(".carouselNav");
  const dots = Array.from(dotsNav.children);

  //Sliding function
  const moveToSlide = (
    track,
    currentSlide,
    targetSlide,
    currentDot,
    targetDot
  ) => {
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    console.log("targetSlide", targetSlide);
    console.log("track", track);
    currentSlide.classList.remove("currentSlide");
    targetSlide.classList.add("currentSlide");

    currentDot.classList.remove("carouselIndicatorCurrentSlide");
    targetDot.classList.add("carouselIndicatorCurrentSlide");
  };
  initSlideWidth();
  window.addEventListener("resize", (event) => {
    scrollToTop();
    initSlideWidth();
  });

  // SMOOTH VERTICAL SCROOL
  window.addEventListener("wheel", (event) => {
    initScrollPosition(event);
  });
  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }
  // HORIZONTAL CAROUSEL

  //slider move to the left
  prevBtn.addEventListener("click", (e) => {
    const currentSlide = track.querySelector(".currentSlide");
    const previousSlide = currentSlide.previousElementSibling;
    console.log("previousSlide", previousSlide);
    //DOT search
    const currentDot = dotsNav.querySelector(".carouselIndicatorCurrentSlide");
    const previousIndex = dots.findIndex((dot) => dot === currentDot) - 1;

    if (previousIndex <= 0 && previousIndex >= dots.length) return;

    const targetDot = dots[previousIndex];
    moveToSlide(track, currentSlide, previousSlide, currentDot, targetDot);
  });

  //slider move to the right
  nextBtn.addEventListener("click", (e) => {
    const currentSlide = track.querySelector(".currentSlide");
    console.log("currentSlide", currentSlide);

    const nextSlide = currentSlide.nextElementSibling;
    console.log("nextSlide", nextSlide);
    //DOT search
    const currentDot = dotsNav.querySelector(".carouselIndicatorCurrentSlide");
    const nextIndex = dots.findIndex((dot) => dot === currentDot) + 1;

    if (nextIndex >= dots.length) return;

    const targetDot = dots[nextIndex];
    moveToSlide(track, currentSlide, nextSlide, currentDot, targetDot);
  });

  // DOTS INDICATORS
  dotsNav.addEventListener("click", (e) => {
    //find the triggered btn
    const targetDot = e.target.closest("button");
    if (!targetDot) return;

    //curent slide
    const currentSlide = track.querySelector(".currentSlide");
    //curent dot
    const currentDot = dotsNav.querySelector(".carouselIndicatorCurrentSlide");
    const targetIndex = dots.findIndex((dot) => dot === targetDot);

    //target slide
    const targetSlide = slides[targetIndex];

    //Sliding function
    moveToSlide(track, currentSlide, targetSlide, currentDot, targetDot);
  });

  function initScrollPosition(event) {
    if (event.deltaY == "-100") {
      window.scrollBy({
        top: -window.innerHeight,
        left: 0,
        behavior: "smooth",
      });
    } else if (event.deltaY == "100") {
      window.scrollBy({ top: window.innerHeight, left: 0, behavior: "smooth" });
    }
  }

  function initSlideWidth() {
    //screen size scrolling calculation
    const slideWidth = slides[0].getBoundingClientRect().width;

    //arrange the slides next to one another
    const setSlidePosition = (slides, index) => {
      slides.style.left = slideWidth * index + "px";
    };
    slides.forEach(setSlidePosition);
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
});

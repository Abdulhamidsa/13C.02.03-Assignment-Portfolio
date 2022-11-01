window.addEventListener("DOMContentLoaded", init);

function init() {
  buttons();
}

function buttons() {
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", (ev) => {
      let scrollDistance = document.documentElement.clientHeight;
      if (btn.className.split(" ").includes("bottom_chev")) {
        scrollDistance *= -1;
      }

      window.scrollBy(0, scrollDistance);
    });
  });
}

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  /*   console.log(scrolled);
   */ let ass = scrolled;
  if (ass < 10) {
    document.querySelector(".sec_1").style.backgroundColor = "var(--accent-clr-red)";
    document.querySelector(".sec_2").style.backgroundColor = "transparent";
    document.querySelector(".sec_3").style.backgroundColor = "transparent";
  }
  if (ass > 600) {
    document.querySelector(".sec_1").style.backgroundColor = "transparent";
    document.querySelector(".sec_3").style.backgroundColor = "transparent";
    document.querySelector(".sec_2").style.backgroundColor = "var(--accent-clr-red)";
  }
  if (ass > 1100) {
    document.querySelector(".sec_1").style.backgroundColor = "transparent";
    document.querySelector(".sec_2").style.backgroundColor = "transparent";
    document.querySelector(".sec_3").style.backgroundColor = "var(--accent-clr-red)";
  }
});

//

document.addEventListener("keydown", function (event) {
  event.preventDefault();
  let scrollDistance = document.documentElement.clientHeight;
  const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
  switch (key) {
    case "ArrowUp":
      scrollDistance *= -1;
      window.scrollBy(0, scrollDistance);
      document.querySelector(".bottom_chev").classList.add("myCustomActive");
      break;
    case "ArrowDown":
      scrollDistance *= 1;
      window.scrollBy(0, scrollDistance);
  }
});

const sliders = document.querySelectorAll("[data-carousel-button]");

sliders.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;
    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

const buttonsOverlay = document.querySelectorAll(".viewP");
const body = document.querySelector("body");
const overlay = document.querySelector("#overlay");
const popContainer = document.querySelector("#popup_about, #popup_container");
const popAbout = document.querySelector("#popup_about");
const sliderContact = document.querySelector("#contact_slider");
const closePop = document.querySelectorAll(".exit");
const closeArrow = document.querySelector(".bi-arrow-right-square");

/* document.querySelector(".contact").addEventListener("click", () => {
  sliderContact.style.right = "0";
}); */
/* document.querySelector(".bi-arrow-right-square").addEventListener("click", () => {
  sliderContact.style.right = "-50%";
}); */
buttonsOverlay.forEach((button) => {
  button.addEventListener("click", (evt) => {
    addOverlay();
  });
});
function addOverlay() {
  body.style.overflow = "hidden";
  overlay.style.visibility = "visible";
  overlay.style.opacity = "1";
  popContainer.style.visibility = "visible";
  popContainer.style.opacity = "1";
  popContainer.style.height = "55vh";
  popAbout.style.visibility = "visible";
  popAbout.style.opacity = "1";
  popAbout.style.height = "70vh";
  console.log("open pop up");
  /*   openPopUp();
   */
}

closePop.forEach((x) => {
  x.addEventListener("click", () => {
    body.style.overflow = "auto";
    overlay.style.visibility = "hidden";
    overlay.style.opacity = "0";
    popContainer.style.visibility = "hidden";
    popContainer.style.opacity = "0";
    popContainer.style.height = "0vh";
    popAbout.style.visibility = "hidden";
    popAbout.style.opacity = "0";
    popAbout.style.height = "0vh";
  });
});
/* function closePopUp() {
  closePop.style.visibility = "hidden";
}
 */

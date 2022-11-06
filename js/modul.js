import { animate, scroll, stagger, inView } from "https://cdn.skypack.dev/motion";

const body = document.querySelector("body");
const topSection = document.querySelectorAll("article");
const bottomSetion = document.querySelector("#request");
animate(body, { opacity: [0, 1] }, { duration: 1 });
body.addEventListener("animationend", ahh);
function ahh() {
  console.log("asssssss");
}
inView(topSection, ({ target }) => {
  animate(target.querySelectorAll("p, h2"), { y: ["100%", "-10%"] }, { duration: 1 }, { delay: 1}, { easing: "ease-out-in" });
});

console.log("ass");

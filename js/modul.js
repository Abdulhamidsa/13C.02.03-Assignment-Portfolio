/* import { animate, scroll, stagger, inView } from "https://cdn.skypack.dev/motion";

const body = document.querySelector("body");
const topSection = document.querySelectorAll("article");
const bottomSetion = document.querySelector("#request");
animate(body, { opacity: [0, 1] }, { duration: 1 });
body.addEventListener("animationend", ahh);
function ahh() {
  console.log("asssssss");
}
inView(topSection, ({ target }) => {
  animate(target.querySelector("h2"), { x: ["100%", "0%"] }, { duration: 1 }, { delay: 50 }, { easing: "ease-out" });
  animate(target.querySelector("p"), { x: ["-100%", "0%"] }, { duration: 1 }, { delay: 50 }, { easing: "ease-out" });
});
 */
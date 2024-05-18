import "./style.scss";
import gsap from "gsap";

// background: radial-gradient(83.69% 83.69% at 50% 35.84%, #24D381 0%, #00725B 100%);
// background: radial-gradient(83.69% 83.69% at 50% 35.84%, #E3DC25 0%, #E8C000 67.71%);
// background: radial-gradient(83.69% 83.69% at 50% 35.84%, #C91920 0%, #6F0012 100%);
// background: radial-gradient(83.69% 83.69% at 50% 35.84%, #9C00E9 0%, #5F00E0 100%);

const ease = "elastic.out(1,0.85)";
const duration = 1.5;

const main = document.querySelector(".main");

const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

const titles = document.querySelectorAll(".title");
const names = document.querySelectorAll(".name");
const images = document.querySelectorAll(".image");

let current = 0;

arrowLeft.addEventListener("click", () => {
  current--;
  if (current < 0) current = titles.length - 1;
  update();
});

arrowRight.addEventListener("click", () => {
  current++;
  if (current > titles.length - 1) current = 0;
  update();
});

function update() {
  switch (current) {
    case 0:
      main.style.background =
        "radial-gradient(83.69% 83.69% at 50% 35.84%, #24D381 0%, #00725B 100%)";
      break;
    case 1:
      main.style.background =
        "radial-gradient(83.69% 83.69% at 50% 35.84%, #E3DC25 0%, #E8C000 67.71%)";
      break;
    case 2:
      main.style.background =
        "radial-gradient(83.69% 83.69% at 50% 35.84%, #C91920 0%, #6F0012 100%)";
      break;
    case 3:
      main.style.background =
        "radial-gradient(83.69% 83.69% at 50% 35.84%, #9C00E9 0%, #5F00E0 100%)";
      break;
    default:
      break;
  }

  titles.forEach((title, index) => {
    if (index === current) {
      gsap.to(title, {
        duration: duration,
        ease: ease,
        opacity: 1,
        y: 0,
      });
    } else {
      gsap.to(title, {
        duration: duration,
        ease: ease,
        opacity: 0,
        y: "-100%",
      });
    }
  });

  names.forEach((name, index) => {
    if (index === current) {
      gsap.to(name, {
        duration: duration,
        ease: ease,
        opacity: 1,
      });
    } else {
      gsap.to(name, {
        duration: duration,
        ease: ease,
        opacity: 0,
      });
    }
  });

  images.forEach((image, index) => {
    if (index === current) {
      gsap.to(image, {
        duration: duration,
        ease: ease,
        y: 0,
        scale: 1,
      });
    } else {
      gsap.to(image, {
        duration: duration,
        ease: ease,
        y: "100%",
        scale: 0.5,
      });
    }
  });
}

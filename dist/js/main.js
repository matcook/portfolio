let navbar = document.querySelector(".navbar");
let navBtn = document.querySelectorAll("li");
let skills = document.querySelector(".skills");
let about = document.querySelector("#about");
let projects = document.querySelector("#projects");
let contact = document.querySelector("#contact");

window.onload = () => {
  navBtns();

  if (pageYOffset > skills.offsetTop - 300) {
    runGraph();
  }
};

window.onscroll = () => {
  if (pageYOffset >= skills.offsetTop - 300) {
    runGraph();
  }

  if (pageYOffset >= about.offsetTop - 60) {
    navbar.classList.add("sticky");
    about.style.marginTop = "60px";
  } else {
    navbar.classList.remove("sticky");
    about.removeAttribute("style");
  }
};

document.querySelector(".btn").addEventListener("click", () => {
  scrollTo(document.documentElement, about.offsetTop - 60, 200);
});

let navBtns = () => {
  for (let i = 0; i < navBtn.length; i++) {
    navBtn[i].addEventListener("click", (e) => {
      scrollTo(
        document.documentElement,
        document.querySelector(navBtn[i].dataset.destination).offsetTop - 60,
        200
      );
      for (let i = 0; i < navBtn.length; i++) {
        if (navBtn[i] != e.target) {
          navBtn[i].classList.remove('active');
        } else {
          navBtn[i].classList.add('active');
        }
      }
    });
  }
};

let runGraph = () => {
  let bar = document.querySelectorAll(".bar-fill");

  for (let i = 0; i < bar.length; i++) {
    let percent = bar[i].dataset.percent;
    bar[i].style.width = `calc(${percent} - 80px)`;
  }
};

let scrollTo = (element, to, duration) => {
  let start = element.scrollTop,
    change = to - start,
    currentTime = 0,
    increment = 5;

  let animateScroll = function () {
    currentTime += increment;
    let val = Math.easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;
    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    }
  };
  animateScroll();
};

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};
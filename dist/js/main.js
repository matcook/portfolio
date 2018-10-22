let navbar = document.querySelector(".navbar");
let navBtn = document.querySelectorAll("li");
let skills = document.querySelector(".skills");
let home = document.querySelector('#home');
let about = document.querySelector("#about");
let projects = document.querySelector("#projects");
let contact = document.querySelector("#contact");
let footer = document.querySelector('footer');

window.onload = () => {
  navBtns();
  activeLinks();
  stickyNav();
};

window.onscroll = () => {
  runGraph();
  activeLinks();
  stickyNav();
};

document.querySelector(".btn").addEventListener("click", () => {
  scrollTo(document.documentElement, about.offsetTop - 60, 200);
});

let navBtns = () => {
  for (let i = 0; i < navBtn.length; i++) {
    navBtn[i].addEventListener("click", () => {
      scrollTo(
        document.documentElement,
        document.querySelector(navBtn[i].dataset.destination).offsetTop - 60,
        200
      );
    });
  }
};

let stickyNav = () => {
  if (pageYOffset >= about.offsetTop - 60) {
    navbar.classList.add("sticky");
    about.style.marginTop = "60px";
  } else {
    navbar.classList.remove("sticky");
    about.removeAttribute("style");
  }
}

let runGraph = () => {
  if (pageYOffset >= skills.offsetTop - window.innerHeight) {
    let bar = document.querySelectorAll(".bar-fill");

    for (let i = 0; i < bar.length; i++) {
      let percent = bar[i].dataset.percent;
      bar[i].style.width = `calc(${percent} - 80px)`;
    }
  }
};

let activeLinks = () => {
  home.offsetTop <= pageYOffset && pageYOffset < about.offsetTop - 70 ? navBtn[0].classList.add("active") : navBtn[0].classList.remove("active");
  about.offsetTop - 70 <= pageYOffset && pageYOffset < projects.offsetTop - 70 ? navBtn[1].classList.add("active") : navBtn[1].classList.remove("active");
  projects.offsetTop - 70 <= pageYOffset && pageYOffset < contact.offsetTop - 70 ? navBtn[2].classList.add("active") : navBtn[2].classList.remove("active");
  contact.offsetTop - 70 <= pageYOffset && pageYOffset < footer.offsetTop ? navBtn[3].classList.add("active") : navBtn[3].classList.remove("active");
}

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
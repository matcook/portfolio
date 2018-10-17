window.onload = () => {
  navBtns();

  if (pageYOffset > document.querySelector('.skills') - 200) {
    runGraph();
  }
}


window.onscroll = () => {
  if (pageYOffset >= document.querySelector('.skills').offsetTop - 300) {
    runGraph();
  }

  if (pageYOffset >= document.querySelector('#about').offsetTop - 60) {
    console.log('sticky');
    document.querySelector('.navbar').classList.add('sticky');
    document.querySelector('#about').style.marginTop = '60px';
  } else {
    document.querySelector('.navbar').classList.remove('sticky');
    document.querySelector('#about').removeAttribute('style');
  }



};

document.querySelector('.btn').addEventListener('click', () => {
  scrollTo(document.documentElement, document.querySelector('#about').offsetTop - 60, 200);
})

let navBtns = () => {
  let navBtn = document.querySelectorAll('li');

  for (let i = 0; i < navBtn.length; i++) {
    navBtn[i].addEventListener('click', () => {
      scrollTo(document.documentElement, document.querySelector(navBtn[i].dataset.destination).offsetTop - 60, 200);
    })
  }
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
}

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

let runGraph = () => {
  let bar = document.querySelectorAll(".bar-fill");

  for (let i = 0; i < bar.length; i++) {
    let percent = bar[i].dataset.percent;
    bar[i].style.width = `calc(${percent} - 80px)`;
  }
};
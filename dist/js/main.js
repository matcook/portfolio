import jump from '../../node_modules/jump.js/dist/jump.module.js';

// Sticky Nav

window.onscroll = () => {
  stickyNav();
  console.log(navbar.offsetTop);
}

let about = document.querySelector('#about');
let navbar = document.querySelector('.navbar');

let stickyNav = () => {
  if (window.pageYOffset >= about.offsetTop - 60) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }

}


// Smooth Scrolling Buttons

let homeBtn = document.querySelectorAll('li')[0];
let aboutBtn = document.querySelectorAll('li')[1];
let projectsBtn = document.querySelectorAll('li')[2];
let contactBtn = document.querySelectorAll('li')[3];
let enterBtn = document.querySelector('.btn');

enterBtn.addEventListener('click', () => {
  jump('#about');
});

homeBtn.addEventListener('click', () => {
  jump('#home');
});

aboutBtn.addEventListener('click', () => {
  jump('#about');
});

projectsBtn.addEventListener('click', () => {
  jump('#projects');
});

contactBtn.addEventListener('click', () => {
  jump('#contact');
});

// Skill Charts

let makeChart = (name, amount) => {
  let options = {
    chart: {
      width: "100%",

      type: "radialBar"
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "65%"
        }
      }
    },
    series: [amount],
    labels: [name.id]
  };

  let chart = new ApexCharts(name, options);
  chart.render();
}

makeChart(HTML, 90);
makeChart(CSS3, 80);
makeChart(ES6, 80);
makeChart(React, 70);
makeChart(NodeJS, 70);
makeChart(PHP, 60);
makeChart(SQL, 60);
makeChart(Google, 100);
import jump from '../../node_modules/jump.js/dist/jump.module.js';

// Scroll functions

window.onscroll = () => {
  stickyNav();
  let about = document.querySelector('#about');
  let projects = document.querySelector('#projects');
  let check = document.querySelectorAll('.check');
  console.log(pageYOffset, 'page Y offset');
  console.log(about.offsetTop);

  if (pageYOffset >= 100 && pageYOffset <= projects.offsetTop && check[0].innerHTML === '') {
    drawCharts();
  } else if (pageYOffset > projects.offsetTop || pageYOffset < 100) {

    for (let i = 0; i < check.length; i++) {
      check[i].innerHTML = '';
    }

  }

}


// Sticky Nav

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
  jump('#about', {
    duration: 2000
  });
});

homeBtn.addEventListener('click', () => {
  jump('#home', {
    duration: 2000
  });
});

aboutBtn.addEventListener('click', () => {
  jump('#about', {
    duration: 2000
  });
});

projectsBtn.addEventListener('click', () => {
  jump('#projects', {
    duration: 2000
  });
});

contactBtn.addEventListener('click', () => {
  jump('#contact', {
    duration: 2000
  });
});

// Skill Charts

let makeChart = (name, amount) => {
  let options = {
    chart: {
      width: "100%",

      type: "radialBar",
      animations: {
        speed: 2500
      },
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

let drawCharts = () => {


  makeChart(HTML, 90);
  makeChart(CSS3, 80);
  makeChart(ES6, 80);
  makeChart(React, 70);
  makeChart(NodeJS, 70);
  makeChart(PHP, 60);
  makeChart(SQL, 60);
  makeChart(Google, 100);

}
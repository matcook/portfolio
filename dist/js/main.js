window.onscroll = () => {
  if (pageYOffset >= 100) {
    runGraph();
  }
};

let runGraph = () => {
  let bar = document.querySelectorAll(".bar-fill");

  for (let i = 0; i < bar.length; i++) {
    let percent = bar[i].dataset.percent;
    bar[i].style.width = `calc(${percent} - 80px)`;
  }
};
2;
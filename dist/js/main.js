window.onscroll = () => {
  if (pageYOffset >= document.querySelector('#about').offsetTop) {
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






let runGraph = () => {
  let bar = document.querySelectorAll(".bar-fill");

  for (let i = 0; i < bar.length; i++) {
    let percent = bar[i].dataset.percent;
    bar[i].style.width = `calc(${percent} - 80px)`;
  }
};
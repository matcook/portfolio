function makeChart(name, amount) {
  let options = {
    chart: {
      width: '100%',

      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '65%',
        }
      },
    },
    series: [amount],
    labels: [name.id],

  }

  let chart = new ApexCharts(
    name,
    options
  );
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
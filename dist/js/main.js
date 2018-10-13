function makeChart(name, amount) {
  let options = {
    chart: {
      width: '100%',

      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '75%',
        }
      },
    },
    series: [amount],
    labels: [name.id],

  }

  console.log(name);
  let chart = new ApexCharts(
    name,
    options
  );
  chart.render();
}

makeChart(HTML, 80);
makeChart(CSS3, 90);
makeChart(ES6, 90);
makeChart(React, 90);
makeChart(NodeJS, 90);
makeChart(PHP, 90);
makeChart(SQL, 90);

makeChart(Google, 90);
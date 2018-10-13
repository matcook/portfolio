function makeChart(name, amount) {
  let options = {
    chart: {
      width: '110%',

      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%',
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
makeChart(JavaScript, 90);
makeChart(React, 90);
makeChart(NodeJS, 90);
makeChart(PHP, 90);
makeChart(SQL, 90);

makeChart(Google, 90);
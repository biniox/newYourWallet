import './chart.scss';

import { useState } from 'react';

// import Chart from 'chart.js';
import { Bar, Pie, defaults } from 'react-chartjs-2';

const Chart = ({title, labels, data, type}) => {

    defaults.global.defaultFontColor = 'white';
    defaults.global.defaultFontSize = 20;
    defaults.global.legend.position = 'bottom';

     const [chartData, setChartData] = useState({
        labels: [...labels],
        datasets: [{
            label: title,
            data: [...data],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
        }]
    });

    const [axes, setAxes] = useState({scales: {
        gridLines: [{display: false}],
        yAxes: [{
            scales: {
                display: false
            },
            gridLines: {
                display: false
            },
            display: (type=="Bar")
        }],
        xAxes: [{
            gridLines: {
                display: false
            },
            display: (type=="Bar")
        }],
    },
    legend: {
        display: (type=="Pie")
    }

})
    return (
    <div className="ChartWrapper">
        <h3>{title}</h3>
        {type=="Bar" ? <Bar className="ChartWrapper__item" data={chartData} options={axes} /> : <Pie className="ChartWrapper__item" data={chartData} options={axes} />}
    </div>
    )
}

export default Chart;
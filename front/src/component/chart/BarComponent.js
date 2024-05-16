import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarComponent = () => {
    const data = {
        labels: ['MBTI', '직업', '성격', '얼굴상', '나이대'],
        datasets: [{
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
            ],
            borderWidth: 0,
            borderRadius: 20,
        }]
    };

    const options = {
        scales: {
            y: {
                display: false,
                beginAtZero: true,
            },
            x: {
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        },
        hover: 'none',
    };

    return (
        <div>
            <Bar data={data} options={options}/>
        </div>
    );
};

export default BarComponent;

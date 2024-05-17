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
                '#EB604A',
                '#FFC700',
                '#28C15C',
                '#00B2FF',
                '#A26AFF'
            ],
            borderWidth: 0,
            borderRadius: 30,
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
        categoryPercentage: 0.6, // 카테고리 너비 비율 설정
        barPercentage: 0.8, // 막대 너비 비율 설정
    };

    return (
        <div>
            <Bar data={data} options={options}/>
        </div>
    );
};

export default BarComponent;

import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutComponent = () => {
    const data = {
        labels: ['요리', '업무', '기타'],
        datasets: [
            {
                data: [3, 1, 2],
                backgroundColor: [
                    '#EB604A',
                    '#00B2FF',
                    '#FFC700',
                ],
                borderWidth: 0,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    padding: 25,
                    boxWidth: 10,
                    boxHeight: 10,
                    usePointStyle: true,
                    borderWidth: 0,
                    font: {
                        size: 15, // 라벨 폰트 사이즈 설정
                    },
                    generateLabels: function (chart) {
                        const data = chart.data;
                        if (data.labels.length && data.datasets.length) {
                            return data.labels.map((label, index) => {
                                const dataset = data.datasets[0];
                                const value = dataset.data[index]; // 해당 데이터 값 가져오기
                                const backgroundColor = dataset.backgroundColor[index];
                                return {
                                    text: `${label} - ${value}`, // 라벨과 값으로 구성된 텍스트
                                    fillStyle: backgroundColor, // 배경색
                                    hidden: isNaN(value), // 값이 없는 경우 항목 숨김
                                };
                            });
                        }
                        return [];
                    }
                }
            },
            tooltip: {
                enabled: false, // 호버 효과 비활성화
            }
        },
        title: {
            display: true,
            text: 'Votes Distribution',
        },
        hover: {
            mode: null, // 호버 효과 비활성화
        },
        layout: {
            padding: {
                bottom: 20, // 차트 상단에 패딩 추가
            },
        },
        cutout: '55%',
    };

    return (
            <Doughnut data={data} options={options}/>
    );
};

export default DoughnutComponent;

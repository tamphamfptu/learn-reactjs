import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Chart } from 'primereact/chart';

function App() {
 const DoughnutChartDemo = () => {
    const chartData = {
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
    };

    const lightOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        }
    };

    return (
        <div className="card flex justify-content-center">
            <Chart type="doughnut" data={chartData} options={lightOptions} style={{ position: 'relative', width: '40%' }} />
        </div>
    )
}
}

export default App;

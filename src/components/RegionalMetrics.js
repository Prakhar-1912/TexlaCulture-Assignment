import React from "react";
import {Doughnut } from 'react-chartjs-2';
import {Chart, Tooltip,Title, ArcElement, Legend} from 'chart.js';
Chart.register(
    Tooltip,Title, ArcElement, Legend
);
const data = {
    datasets: [{
        data: [30, 45, 30,15],
        backgroundColor:['#36B37E',' #3366FF','#FFAB00','#FF5630'],
    }],

    labels: [
        'East',
        'North',
        'South',
        'West',
    ]
};
const RegionalMetrics = () => {
  return (
    <div>
      <div className=" text-lg font-semibold px-4 pt-3 pb-6">
        RegionalMetrics
      </div>
      <div className="bg-white px-4 pt-3 pb-4 rounded-[8px] shadow-lg w-[25rem]">
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default RegionalMetrics;

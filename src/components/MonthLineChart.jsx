'use client'

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

export default function MonthLineChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Solar (kWh)',
        data: [300, 350, 400, 370, 450, 490],
        borderColor: '#22c55e', // green
        backgroundColor: 'transparent',
        tension: 0.4,
      },
      {
        label: 'Grid (kWh)',
        data: [250, 280, 320, 300, 360, 390],
        borderColor: '#3b82f6', // blue
        backgroundColor: 'transparent',
        tension: 0.4,
      },
      {
        label: 'Total Use (kWh)',
        data: [550, 630, 720, 670, 810, 880],
        borderColor: '#f97316', // orange
        backgroundColor: 'transparent',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#fff',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#ccc',
        },
        grid: {
          color: '#444',
        },
      },
      y: {
        ticks: {
          color: '#ccc',
        },
        grid: {
          color: '#444',
        },
      },
    },
  };

  return (
    <div className="w-full h-64">
      <Line data={data} options={options} />
    </div>
  );
}
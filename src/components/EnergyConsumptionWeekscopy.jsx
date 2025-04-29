'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function SolarPerformanceChart() {
  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Electricity',
        data: [5, 10, 7, 9, 6, 3, 4],
        backgroundColor: '#6366f1',
      },
      {
        label: 'Solar',
        data: [3, 6, 4, 5, 2, 4, 2],
        backgroundColor: '#facc15',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: '#fff', // รองรับ Dark Mode
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#fff',
        },
      },
      y: {
        ticks: {
          color: '#fff',
        },
        grid: {
          color: 'rgba(255,255,255,0.1)',
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
}
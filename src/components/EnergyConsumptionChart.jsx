'use client';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function EnergyConsumptionChart() {
  const data = {
    labels: ['AC', 'Lighting', 'Fridge', 'TV', 'Others'],
    datasets: [
      {
        label: 'kWh',
        data: [30, 20, 15, 10, 25],
        backgroundColor: [
          '#f87171',
          '#34d399',
          '#60a5fa',
          '#fbbf24',
          '#a78bfa',
        ],
        borderColor: '#111',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: '#fff', // รองรับ Dark Mode
        },
      },
    },
  };

  return <Pie data={data} options={options} />;
}
'use client';

import { useEffect, useState, useRef } from 'react';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export default function EnergyConsumptionLineChart() {
  const [labels, setLabels] = useState(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']);
  const [dataset, setDataset] = useState({
    Main: [5, 6, 7, 6, 8],
    CB1: [3, 4, 3, 5, 4],
    CB2: [2, 2, 3, 2, 3],
    CB3: [1, 2, 1, 1, 2],
    CB5: [4, 3, 4, 5, 4],
    
  });
  const counter = useRef(10);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLabels = [...labels.slice(1), `${counter.current}s`];
      const newData = {
        Main: [...dataset.AC.slice(1), rand()],
        CB1: [...dataset.Lighting.slice(1), rand()],
        CB2: [...dataset.Fridge.slice(1), rand()],
        CB3: [...dataset.TV.slice(1), rand()],
        CB4: [...dataset.Others.slice(1), rand()],
        CB5: [...dataset.Others.slice(1), rand()],
      };

      setLabels(newLabels);
      setDataset(newData);
      counter.current += 5;
    }, 2000);

    return () => clearInterval(interval);
  }, [labels, dataset]);

  const rand = () => Math.floor(Math.random() * 6) + 1;

  const data = {
    labels,
    datasets: [
      {
        label: 'Main',
        data: dataset.Main,
        borderColor: '#f87171',
        backgroundColor: '#f87171',
      },
      {
        label: 'CB1',
        data: dataset.CB1,
        borderColor: '#34d399',
        backgroundColor: '#34d399',
      },
      {
        label: 'CB2',
        data: dataset.CB2,
        borderColor: '#60a5fa',
        backgroundColor: '#60a5fa',
      },
      {
        label: 'CB3',
        data: dataset.CB3,
        borderColor: '#fbbf24',
        backgroundColor: '#fbbf24',
      },
      {
        label: 'CB4',
        data: dataset.CB4,
        borderColor: '#a78bfa',
        backgroundColor: '#a78bfa',
      },
      {
        label: 'CB5',
        data: dataset.CB5,
        borderColor: '#a78bfa',
        backgroundColor: '#a78bfa',
      },
    ],
  };

  const options = {
    responsive: true,
    animation: false,
    plugins: {
      legend: {
        labels: {
          color: '#fff',
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

  return <Line data={data} options={options} />;
}
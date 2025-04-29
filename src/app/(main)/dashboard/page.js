// src/app/(main)/dashboard/page.js

'use client'

import SolarPerformanceChart from '@/components/SolarPerformanceChart';
import EnergyConsumptionChart from '@/components/EnergyConsumptionChart';
import ComparisonChart from '@/components/ComparisonChart';
import MonthLineChart from '@/components/MonthLineChart';

export default function DashboardPage() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">
            Solarcell Performance
          </h2>
          <SolarPerformanceChart />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">
            Energy Consumption
          </h2>
          <EnergyConsumptionChart />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">
          Solar vs Electrical Use (Comparison)
        </h2>
        <ComparisonChart />
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">
          Monthly Trends (Real-Time)
        </h2>
        <MonthLineChart />
      </div>
    </div>
  );
}

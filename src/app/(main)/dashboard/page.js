import DeviceSummary from '@/components/DeviceSummary';
import EnergyConsumptionMonth from '@/components/EnergyConsumptionMonth';
 // Import the new Chart from '@/components/EnergyConsumptionWeeks';
import EnergyConsumptionLineChart from '@/components/EnergyConsumptionLineChart';

export default function DashboardPage() {
  return (
    <div className="p-0.5 space-y-0.5">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Dashboard</h1>
        
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          
        {/* Solarcell Performance */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-4">
          Energy Consumption-Month (kWh)
          </h2>
          <EnergyConsumptionMonth />
          </div>
          {/* EnergyConsumptionMonthLineChart */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-4">
            Energy Consumption-Month Chart (kWh)
          </h2>
          <EnergyConsumptionLineChart />
          </div>

          {/* EnergyConsumptionLineChart */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-4">
            Real-time Energy Consumption Chart
          </h2>
          <EnergyConsumptionLineChart />
          </div>

          {/* Device Sunnary */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-4">
            Real-time Device Sunnary
          </h2>
          <DeviceSummary />
          </div>

      </div>
    </div>
  );
}
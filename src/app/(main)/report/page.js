export default function ReportPage() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Reports</h1>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow space-y-4">
        <p className="text-gray-700 dark:text-gray-300">
          Export summarized energy data as PDF or Excel.
        </p>

        <div className="flex gap-4">
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded">
            Export as PDF
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">
            Export as Excel
          </button>
        </div>

        <div className="mt-6">
          <table className="w-full table-auto text-sm border-collapse">
            <thead className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white">
              <tr>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Solar (kWh)</th>
                <th className="px-4 py-2 text-left">Grid (kWh)</th>
                <th className="px-4 py-2 text-left">Total (kWh)</th>
              </tr>
            </thead>
            <tbody className="text-gray-800 dark:text-gray-200">
              <tr className="border-b border-gray-300 dark:border-gray-700">
                <td className="px-4 py-2">2025-04-28</td>
                <td className="px-4 py-2">12.5</td>
                <td className="px-4 py-2">8.3</td>
                <td className="px-4 py-2">20.8</td>
              </tr>
              <tr className="border-b border-gray-300 dark:border-gray-700">
                <td className="px-4 py-2">2025-04-29</td>
                <td className="px-4 py-2">14.0</td>
                <td className="px-4 py-2">7.2</td>
                <td className="px-4 py-2">21.2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
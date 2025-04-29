export default function DevicePage() {
  return (
    <div className="p-0.5 space-y-1">
<div className="bg-white dark:bg-gray-800 rounded-xl shadow p-1 overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white">
            <tr>
              <th className="px-4 py-2">Device</th>
              <th className="px-4 py-2">Control</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Alarm</th>
              <th className="px-4 py-2">Communication</th>
              <th className="px-4 py-2">Voltage (V)</th>
              <th className="px-4 py-2">Current (A)</th>
              <th className="px-4 py-2">Power (kW)</th>
              <th className="px-4 py-2">Energy (kWh)</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 dark:text-gray-200">
            {[
              {
                name: 'Main',
                status: 'Open',
                alarm: 'Normal',
                comm: 'Online',
                voltage: 220,
                current: 12.5,
                power: 2.75,
                energy: 10.8,
                on: true
              },
              {
                name: 'CB1',
                status: 'Close',
                alarm: 'Alarm',
                comm: 'Offline',
                voltage: 48,
                current: 8.2,
                power: 0.39,
                energy: 4.2,
                on: false
              },
              {
                name: 'CB2',
                status: 'Close',
                alarm: 'Alarm',
                comm: 'Offline',
                voltage: 48,
                current: 8.2,
                power: 0.39,
                energy: 4.2,
                on: false
              },
              {
                name: 'CB3',
                status: 'Close',
                alarm: 'Alarm',
                comm: 'Offline',
                voltage: 48,
                current: 8.2,
                power: 0.39,
                energy: 4.2,
                on: false
              },
              {
                name: 'CB4',
                status: 'Close',
                alarm: 'Alarm',
                comm: 'Offline',
                voltage: 48,
                current: 8.2,
                power: 0.39,
                energy: 4.2,
                on: false
              },
              {
                name: 'CB5',
                status: 'Close',
                alarm: 'Alarm',
                comm: 'Offline',
                voltage: 48,
                current: 8.2,
                power: 0.39,
                energy: 4.2,
                on: false
              },
            ].map((dev, i) => (
              <tr key={i} className="border-b border-gray-300 dark:border-gray-700">
                <td className="px-4 py-2">{dev.name}</td>
                <td className="px-4 py-2">
                  <button className={`px-3 py-1 text-sm rounded font-semibold ${dev.on ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                    {dev.on ? 'On' : 'Off'}
                  </button>
                </td>
                <td className="px-4 py-2">{dev.status}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 text-xs rounded ${dev.alarm === 'Normal' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                    {dev.alarm}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 text-xs rounded ${dev.comm === 'Online' ? 'bg-green-100 text-green-800' : 'bg-gray-400 text-white'}`}>
                    {dev.comm}
                  </span>
                </td>
                <td className="px-4 py-2">{dev.voltage} V</td>
                <td className="px-4 py-2">{dev.current} A</td>
                <td className="px-4 py-2">{dev.power} kW</td>
                <td className="px-4 py-2">{dev.energy} kWh</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
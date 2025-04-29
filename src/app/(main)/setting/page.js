export default function SettingPage() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Settings</h1>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Username
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full mt-1 px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full mt-1 px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white outline-none"
          />
        </div>

        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-6 py-2 rounded mt-4">
          Save Settings
        </button>
      </div>
    </div>
  );
}
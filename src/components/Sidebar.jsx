
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const navItems = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Report', path: '/report' },
    { label: 'Settings', path: '/setting' },
    { label: 'devices', path: '/device' },
  ];

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-white dark:bg-gray-900 border-r border-gray-300 dark:border-gray-800 text-gray-900 dark:text-white p-6 flex flex-col justify-between">
      <div>
        <div className="text-2xl font-bold mb-10">⚡ Manee Power</div>
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-lg px-4 py-2 rounded transition ${
                pathname === item.path
                  ? 'bg-gray-700 text-yellow-300 font-semibold'
                  : 'hover:bg-gray-800'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex flex-col gap-3">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-sm px-4 py-2 rounded-xl"
        >
          Toggle Dark Mode
        </button>
        <div className="text-xs text-gray-400 text-center">Manee © 2025</div>
      </div>
    </aside>
  );
}
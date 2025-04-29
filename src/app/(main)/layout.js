'use client'
import Sidebar from '../../components/Sidebar';

export default function MainLayout({ children }) {
  return (
    <>
      <Sidebar />
      <main className="bg-gray-100 text-gray-900 dark:bg-gray-950 dark:text-white transition-all font-sans">
        {children}
      </main>
    </>
  );
}

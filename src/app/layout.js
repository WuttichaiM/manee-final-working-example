import './globals.css';

export const metadata = {
  title: "Manee Power",
  description: "Energy Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="ml-64 p-8 min-h-screen bg-gray-100 dark:bg-gray-950 transition-all">
        {children}
      </body>
    </html>
  );
}

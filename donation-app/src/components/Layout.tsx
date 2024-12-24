import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Home, LayoutDashboard, Receipt } from 'lucide-react';

export default function Layout() {
  const location = useLocation();
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-indigo-600">NayePankh</h1>
          <p className="text-sm text-gray-500">Fundraising Portal</p>
        </div>
        
        <nav className="mt-8">
          <Link
            to="/"
            className={`flex items-center px-4 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 ${
              location.pathname === '/' ? 'bg-indigo-50 text-indigo-600' : ''
            }`}
          >
            <Home className="w-5 h-5 mr-3" />
            Home
          </Link>
          
          <Link
            to="/dashboard"
            className={`flex items-center px-4 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 ${
              location.pathname === '/dashboard' ? 'bg-indigo-50 text-indigo-600' : ''
            }`}
          >
            <LayoutDashboard className="w-5 h-5 mr-3" />
            Dashboard
          </Link>
          
          <Link
            to="/transactions"
            className={`flex items-center px-4 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 ${
              location.pathname === '/transactions' ? 'bg-indigo-50 text-indigo-600' : ''
            }`}
          >
            <Receipt className="w-5 h-5 mr-3" />
            Transactions
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}
import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Bell, Settings as SettingsIcon, LogOut, ShoppingBasket, RefreshCw, Calendar, BarChart2, PlusCircle } from 'lucide-react';

const Layout = () => {
  const { signOut, user } = useAuthStore();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <ShoppingBasket className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">GroceryTrack</span>
              </div>
            </div>
            <div className="flex items-center">
              <button className="p-2 rounded-full text-gray-400 hover:text-gray-500">
                <Bell className="h-6 w-6" />
              </button>
              <div className="ml-3 relative">
                <div className="flex items-center">
                  <span className="text-gray-700 mr-4">{user?.firstName} {user?.lastName}</span>
                  <button
                    onClick={handleSignOut}
                    className="p-2 rounded-full text-gray-400 hover:text-gray-500"
                  >
                    <LogOut className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className="flex">
        <div className="w-64 bg-white shadow-sm h-[calc(100vh-4rem)] p-4">
          <nav className="space-y-2">
            <Link
              to="/add-grocery"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md"
            >
              <PlusCircle className="h-5 w-5 mr-3" />
              Add New Grocery
            </Link>
            <Link
              to="/update-load-cell"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md"
            >
              <RefreshCw className="h-5 w-5 mr-3" />
              Update Load Cell
            </Link>
            <Link
              to="/update-expiry"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md"
            >
              <Calendar className="h-5 w-5 mr-3" />
              Update Expiry Date
            </Link>
            <Link
              to="/stock-levels"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md"
            >
              <BarChart2 className="h-5 w-5 mr-3" />
              Stock Levels
            </Link>
            <Link
              to="/settings"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md"
            >
              <SettingsIcon className="h-5 w-5 mr-3" />
              Settings
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
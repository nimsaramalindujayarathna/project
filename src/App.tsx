import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AddGrocery from './pages/AddGrocery';
import UpdateLoadCell from './pages/UpdateLoadCell';
import UpdateExpiry from './pages/UpdateExpiry';
import StockLevels from './pages/StockLevels';
import Settings from './pages/Settings';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-grocery" element={<AddGrocery />} />
          <Route path="/update-load-cell" element={<UpdateLoadCell />} />
          <Route path="/update-expiry" element={<UpdateExpiry />} />
          <Route path="/stock-levels" element={<StockLevels />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
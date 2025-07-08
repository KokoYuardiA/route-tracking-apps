import { Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import DriversPage from './pages/DriverPage';
import RoutesPage from './pages/RoutesPage';
import TransaksiPage from './pages/TransaksiPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/drivers" element={<DriversPage />} />
      <Route path="/routes" element={<RoutesPage />} />
      <Route path="/transaksi" element={<TransaksiPage />} />
    </Routes>
  );
}

export default App;

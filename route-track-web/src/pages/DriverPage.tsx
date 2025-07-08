import { useEffect, useState } from "react";
import DriverForm from "../components/DriverForm";
import DriverList from "../components/DriverList";
import api from "../api/axios";

interface Driver {
  id: number;
  nama: string;
  plat: string;
}

export default function DriversPage() {
  const [drivers, setDrivers] = useState<Driver[]>([]);

  const loadDrivers = async () => {
    const res = await api.get("/drivers");
    setDrivers(res.data);
  };

  const addDriver = async (driver: { nama: string; plat: string }) => {
    await api.post("/drivers", driver);
    loadDrivers();
  };

  const deleteDriver = async (id: number) => {
    await api.delete(`/drivers/${id}`);
    loadDrivers();
  };

  useEffect(() => {
    loadDrivers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-400">
          Driver Management
        </h1>

        <div className="mb-8">
          <DriverForm onSubmit={addDriver} />
        </div>

        <DriverList drivers={drivers} onDelete={deleteDriver} />
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import RouteForm from "../components/RouteForm";
import RouteList from "../components/RouteList";
import api from "../api/axios";

interface Route {
  id: number;
  point_awal: string;
  point_akhir: string;
  jarak: number;
  waktu_standart: number;
  price_per_km: number;
  total_cost: number;
}

export default function RoutesPage() {
  const [routes, setRoutes] = useState<Route[]>([]);

  const loadRoutes = async () => {
    const res = await api.get("/routes");
    setRoutes(res.data);
  };

  const addRoute = async (route: Omit<Route, "id">) => {
    await api.post("/routes", route);
    loadRoutes();
  };

  const deleteRoute = async (id: number) => {
    await api.delete(`/routes/${id}`);
    loadRoutes();
  };

  useEffect(() => {
    loadRoutes();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-400">
          Routes Management
        </h1>

        <div className="mb-8">
          <RouteForm onSubmit={addRoute} />
        </div>

        <RouteList routes={routes} onDelete={deleteRoute} />
      </div>
    </div>
  );
}

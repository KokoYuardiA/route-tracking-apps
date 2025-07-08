import { useEffect, useState } from "react";
import TransaksiForm from "../components/TransaksiForm";
import TransaksiList from "../components/TransaksiList";
import api from "../api/axios";

interface Transaksi {
  id: number;
  nama_driver: string;
  plat_driver: string;
  point_start: string;
  point_end: string;
  distance: number;
  total_cost: number;
}

export default function TransaksiPage() {
  const [transaksis, setTransaksis] = useState<Transaksi[]>([]);

  const loadTransaksis = async () => {
    const res = await api.get("/transaksis");
    setTransaksis(res.data);
  };

  const addTransaksi = async (tr: Omit<Transaksi, "id">) => {
    await api.post("/transaksis", tr);
    loadTransaksis();
  };

  const deleteTransaksi = async (id: number) => {
    await api.delete(`/transaksis/${id}`);
    loadTransaksis();
  };

  useEffect(() => {
    loadTransaksis();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-400">
          CRUD Transaksi
        </h1>

        <div className="mb-8">
          <TransaksiForm onSubmit={addTransaksi} />
        </div>

        <TransaksiList transaksis={transaksis} onDelete={deleteTransaksi} />
      </div>
    </div>
  );
}

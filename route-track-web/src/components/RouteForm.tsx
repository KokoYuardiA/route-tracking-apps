import { useState } from "react";

interface RouteFormProps {
  onSubmit: (data: {
    point_awal: string;
    point_akhir: string;
    jarak: number;
    waktu_standart: number;
    price_per_km: number;
    total_cost: number;
  }) => void;
}

export default function RouteForm({ onSubmit }: RouteFormProps) {
  const [form, setForm] = useState({
    point_awal: "",
    point_akhir: "",
    jarak: 0,
    waktu_standart: 0,
    price_per_km: 0,
    total_cost: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name.includes("point") ? value : Number(value),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      point_awal: "",
      point_akhir: "",
      jarak: 0,
      waktu_standart: 0,
      price_per_km: 0,
      total_cost: 0,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-6 rounded-lg shadow-md space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-200 mb-1">Point Awal</label>
          <input
            name="point_awal"
            placeholder="Masukkan titik awal"
            value={form.point_awal}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-200 mb-1">Point Akhir</label>
          <input
            name="point_akhir"
            placeholder="Masukkan titik akhir"
            value={form.point_akhir}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-200 mb-1">Jarak (km)</label>
          <input
            name="jarak"
            type="number"
            value={form.jarak}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-200 mb-1">Waktu Standar (menit)</label>
          <input
            name="waktu_standart"
            type="number"
            value={form.waktu_standart}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-200 mb-1">Harga per KM (Rp)</label>
          <input
            name="price_per_km"
            type="number"
            value={form.price_per_km}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-200 mb-1">Total Biaya (Rp)</label>
          <input
            name="total_cost"
            type="number"
            value={form.total_cost}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      <div className="text-right">
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-2 rounded-md transition-colors"
        >
          Simpan
        </button>
      </div>
    </form>
  );
}

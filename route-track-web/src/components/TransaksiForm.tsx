import { useState } from "react";

interface TransaksiFormProps {
  onSubmit: (data: any) => void;
}

export default function TransaksiForm({ onSubmit }: TransaksiFormProps) {
  const [form, setForm] = useState({
    nama_driver: "",
    plat_driver: "",
    point_start: "",
    point_end: "",
    distance: 0,
    date: "",
    actual_time: 0,
    waktu_standart: 0,
    total_cost: 0,
    telat: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: ["nama_driver", "plat_driver", "point_start", "point_end", "date"].includes(name)
        ? value
        : Number(value),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      nama_driver: "",
      plat_driver: "",
      point_start: "",
      point_end: "",
      distance: 0,
      date: "",
      actual_time: 0,
      waktu_standart: 0,
      total_cost: 0,
      telat: 0,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-6 rounded-lg shadow-md space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-200 mb-1">Nama Driver</label>
          <input
            name="nama_driver"
            placeholder="Nama Driver"
            value={form.nama_driver}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-200 mb-1">Plat Driver</label>
          <input
            name="plat_driver"
            placeholder="Plat Driver"
            value={form.plat_driver}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-200 mb-1">Point Start</label>
          <input
            name="point_start"
            placeholder="Point Start"
            value={form.point_start}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-200 mb-1">Point End</label>
          <input
            name="point_end"
            placeholder="Point End"
            value={form.point_end}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-200 mb-1">Distance (km)</label>
          <input
            name="distance"
            type="number"
            placeholder="Jarak"
            value={form.distance}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-200 mb-1">Tanggal</label>
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-200 mb-1">Waktu Aktual (mnt)</label>
          <input
            name="actual_time"
            type="number"
            placeholder="Waktu aktual"
            value={form.actual_time}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-200 mb-1">Waktu Standar (mnt)</label>
          <input
            name="waktu_standart"
            type="number"
            placeholder="Waktu standar"
            value={form.waktu_standart}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-200 mb-1">Total Cost (Rp)</label>
          <input
            name="total_cost"
            type="number"
            placeholder="Total Biaya"
            value={form.total_cost}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-200 mb-1">Telat (mnt)</label>
          <input
            name="telat"
            type="number"
            placeholder="Keterlambatan"
            value={form.telat}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      <div className="text-right">
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-2 rounded-md transition-colors"
        >
          Simpan
        </button>
      </div>
    </form>
  );
}

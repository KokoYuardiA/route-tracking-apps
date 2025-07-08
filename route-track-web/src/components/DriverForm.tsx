import { useState } from "react";

interface DriverFormProps {
  onSubmit: (data: { nama: string; plat: string }) => void;
}

export default function DriverForm({ onSubmit }: DriverFormProps) {
  const [nama, setNama] = useState("");
  const [plat, setPlat] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ nama, plat });
    setNama("");
    setPlat("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-6 rounded-lg shadow-md space-y-4"
    >
      <div>
        <label className="block text-sm font-medium text-gray-200 mb-1">
          Nama Driver
        </label>
        <input
          type="text"
          placeholder="Masukkan nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-200 mb-1">
          Plat Nomor
        </label>
        <input
          type="text"
          placeholder="Masukkan plat nomor"
          value={plat}
          onChange={(e) => setPlat(e.target.value)}
          className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="text-right">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2 rounded-md transition-colors"
        >
          Simpan
        </button>
      </div>
    </form>
  );
}

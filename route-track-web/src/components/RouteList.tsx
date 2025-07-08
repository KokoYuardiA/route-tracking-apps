interface Route {
  id: number;
  point_awal: string;
  point_akhir: string;
  jarak: number;
  waktu_standart: number;
  price_per_km: number;
  total_cost: number;
}

interface RouteListProps {
  routes: Route[];
  onDelete: (id: number) => void;
}

export default function RouteList({ routes, onDelete }: RouteListProps) {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full divide-y divide-gray-700 border border-gray-600 rounded-lg">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-4 py-3 text-sm text-left text-gray-300 font-semibold uppercase tracking-wider">Point Awal</th>
            <th className="px-4 py-3 text-sm text-left text-gray-300 font-semibold uppercase tracking-wider">Point Akhir</th>
            <th className="px-4 py-3 text-sm text-right text-gray-300 font-semibold uppercase tracking-wider">Jarak (km)</th>
            <th className="px-4 py-3 text-sm text-right text-gray-300 font-semibold uppercase tracking-wider">Waktu (mnt)</th>
            <th className="px-4 py-3 text-sm text-right text-gray-300 font-semibold uppercase tracking-wider">Harga/km</th>
            <th className="px-4 py-3 text-sm text-right text-gray-300 font-semibold uppercase tracking-wider">Total Biaya</th>
            <th className="px-4 py-3 text-sm text-right text-gray-300 font-semibold uppercase tracking-wider">Aksi</th>
          </tr>
        </thead>
        <tbody className="bg-gray-900 divide-y divide-gray-700">
          {routes.map((route) => (
            <tr key={route.id} className="hover:bg-gray-800 transition-colors">
              <td className="px-4 py-3 text-sm text-white">{route.point_awal}</td>
              <td className="px-4 py-3 text-sm text-white">{route.point_akhir}</td>
              <td className="px-4 py-3 text-sm text-right text-white">{route.jarak}</td>
              <td className="px-4 py-3 text-sm text-right text-white">{route.waktu_standart}</td>
              <td className="px-4 py-3 text-sm text-right text-white">Rp {route.price_per_km.toLocaleString()}</td>
              <td className="px-4 py-3 text-sm text-right text-white">Rp {route.total_cost.toLocaleString()}</td>
              <td className="px-4 py-3 text-sm text-right">
                <button
                  onClick={() => onDelete(route.id)}
                  className="text-red-500 hover:text-red-300 transition-colors"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
          {routes.length === 0 && (
            <tr>
              <td colSpan={7} className="text-center py-6 text-gray-400">
                Tidak ada data rute.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

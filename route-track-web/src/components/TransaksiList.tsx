interface Transaksi {
  id: number;
  nama_driver: string;
  plat_driver: string;
  point_start: string;
  point_end: string;
  distance: number;
  total_cost: number;
}

interface TransaksiListProps {
  transaksis: Transaksi[];
  onDelete: (id: number) => void;
}

export default function TransaksiList({ transaksis, onDelete }: TransaksiListProps) {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full divide-y divide-gray-700 border border-gray-600 rounded-lg">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-4 py-3 text-sm text-left text-gray-300 font-semibold uppercase tracking-wider">Driver</th>
            <th className="px-4 py-3 text-sm text-left text-gray-300 font-semibold uppercase tracking-wider">Plat</th>
            <th className="px-4 py-3 text-sm text-left text-gray-300 font-semibold uppercase tracking-wider">Dari</th>
            <th className="px-4 py-3 text-sm text-left text-gray-300 font-semibold uppercase tracking-wider">Ke</th>
            <th className="px-4 py-3 text-sm text-right text-gray-300 font-semibold uppercase tracking-wider">Jarak (km)</th>
            <th className="px-4 py-3 text-sm text-right text-gray-300 font-semibold uppercase tracking-wider">Biaya (Rp)</th>
            <th className="px-4 py-3 text-sm text-right text-gray-300 font-semibold uppercase tracking-wider">Aksi</th>
          </tr>
        </thead>
        <tbody className="bg-gray-900 divide-y divide-gray-700">
          {transaksis.map((tr) => (
            <tr key={tr.id} className="hover:bg-gray-800 transition-colors">
              <td className="px-4 py-3 text-sm text-white">{tr.nama_driver}</td>
              <td className="px-4 py-3 text-sm text-white">{tr.plat_driver}</td>
              <td className="px-4 py-3 text-sm text-white">{tr.point_start}</td>
              <td className="px-4 py-3 text-sm text-white">{tr.point_end}</td>
              <td className="px-4 py-3 text-sm text-right text-white">{tr.distance}</td>
              <td className="px-4 py-3 text-sm text-right text-white">Rp {tr.total_cost.toLocaleString()}</td>
              <td className="px-4 py-3 text-sm text-right">
                <button
                  onClick={() => onDelete(tr.id)}
                  className="text-red-500 hover:text-red-300 transition-colors"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
          {transaksis.length === 0 && (
            <tr>
              <td colSpan={7} className="text-center py-6 text-gray-400">
                Tidak ada transaksi.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

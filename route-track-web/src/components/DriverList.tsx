interface Driver {
  id: number;
  nama: string;
  plat: string;
}

interface DriverListProps {
  drivers: Driver[];
  onDelete: (id: number) => void;
}

export default function DriverList({ drivers, onDelete }: DriverListProps) {
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-700 border border-gray-600 rounded-lg">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Nama
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Plat Nomor
            </th>
            <th className="px-6 py-3 text-right text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-900 divide-y divide-gray-700">
          {drivers.map((driver) => (
            <tr key={driver.id} className="hover:bg-gray-800 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                {driver.nama}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                {driver.plat}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                <button
                  onClick={() => onDelete(driver.id)}
                  className="text-red-500 hover:text-red-300 transition-colors"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
          {drivers.length === 0 && (
            <tr>
              <td colSpan={3} className="text-center py-6 text-gray-400">
                Tidak ada data driver.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

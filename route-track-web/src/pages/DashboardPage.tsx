import { useEffect, useState } from "react";
import api from "../api/axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ReportItem {
  driverId: number;
  nama_driver?: string;
  telatCount?: number;
  totalCost?: number;
  totalDistance?: number;
  tripCount?: number;
}

export default function DashboardPage() {
  const [lateDrivers, setLateDrivers] = useState<ReportItem[]>([]);
  const [secondLateDriver, setSecondLateDriver] = useState<ReportItem | null>(null);
  const [secondCostDriver, setSecondCostDriver] = useState<ReportItem | null>(null);
  const [farthestDriver, setFarthestDriver] = useState<ReportItem | null>(null);
  const [tripCounts, setTripCounts] = useState<ReportItem[]>([]);
  const [chartData, setChartData] = useState<any>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchReports = async () => {
      const lateRes = await api.get("/reports/paling-sering-telat");
      setLateDrivers(lateRes.data);
      if (lateRes.data.length >= 2) {
        setSecondLateDriver(lateRes.data[1]);
      }

      const costRes = await api.get("/reports/cost-tertinggi-kedua");
      if (costRes.data.length >= 2) {
        setSecondCostDriver(costRes.data[1]);
      }

      const farthestRes = await api.get("/reports/jarak-tempuh-terjauh");
      if (farthestRes.data.length >= 1) {
        setFarthestDriver(farthestRes.data[0]);
      }

      const tripCountRes = await api.get("/reports/jumlah-trip");
      setTripCounts(tripCountRes.data);

      if (Array.isArray(tripCountRes.data)) {
        setChartData({
          labels: tripCountRes.data.map((d: any) => d.nama_driver || `Driver ${d.driverId}`),
          datasets: [
            {
              label: "Total Distance (km)",
              data: tripCountRes.data.map((d: any) => d.totalDistance || 0),
              backgroundColor: "rgba(54, 162, 235, 0.7)",
            },
            {
              label: "Total Cost (Rp)",
              data: tripCountRes.data.map((d: any) => d.totalCost || 0),
              backgroundColor: "rgba(255, 99, 132, 0.7)",
            },
          ],
        });
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-purple-400">Dashboard Laporan</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-gray-800 p-5 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Driver Paling Sering Telat</h2>
            {lateDrivers[0] ? (
              <p>
                <span className="text-purple-300">{lateDrivers[0].nama_driver}</span> - Telat{" "}
                <strong>{lateDrivers[0].telatCount}</strong> kali
              </p>
            ) : (
              <p>Tidak ada data</p>
            )}
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800 p-5 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Driver Telat Kedua</h2>
            {secondLateDriver ? (
              <p>
                <span className="text-purple-300">{secondLateDriver.nama_driver}</span> - Telat{" "}
                <strong>{secondLateDriver.telatCount}</strong> kali
              </p>
            ) : (
              <p>Tidak ada data</p>
            )}
          </div>

          {/* Card 3 */}
          <div className="bg-gray-800 p-5 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Cost Tertinggi Kedua</h2>
            {secondCostDriver ? (
              <p>
                <span className="text-purple-300">{secondCostDriver.nama_driver}</span> - Rp{" "}
                <strong>{secondCostDriver.totalCost?.toLocaleString()}</strong>
              </p>
            ) : (
              <p>Tidak ada data</p>
            )}
          </div>

          {/* Card 4 */}
          <div className="bg-gray-800 p-5 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Jarak Tempuh Terjauh</h2>
            {farthestDriver ? (
              <p>
                <span className="text-purple-300">{farthestDriver.nama_driver}</span> -{" "}
                <strong>{farthestDriver.totalDistance} km</strong>
              </p>
            ) : (
              <p>Tidak ada data</p>
            )}
          </div>

          {/* List of trip counts */}
          <div className="bg-gray-800 p-5 rounded-lg shadow-md col-span-1 md:col-span-2">
            <h2 className="text-lg font-semibold mb-2">Jumlah Trip per Driver</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              {tripCounts.map((tc) => (
                <li key={tc.driverId}>
                  {tc.nama_driver || `Driver ${tc.driverId}`} —{" "}
                  <strong>{tc.tripCount}</strong> trip
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md mt-8">
          <h2 className="text-xl font-semibold mb-4">Grafik Jarak vs Biaya per Driver</h2>
          <Bar
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                legend: { position: "top" as const },
                title: {
                  display: true,
                  text: "Perbandingan Jarak Tempuh dan Total Biaya",
                  color: "white",
                  font: { size: 18 },
                },
              },
              scales: {
                x: {
                  ticks: { color: "#ccc" },
                  grid: { color: "#444" },
                },
                y: {
                  ticks: { color: "#ccc" },
                  grid: { color: "#444" },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

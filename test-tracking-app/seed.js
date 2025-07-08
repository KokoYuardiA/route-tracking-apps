const { sequelize, Driver, Route, Transaksi } = require('./src/models');

async function seed() {
  try {
    await sequelize.sync({ force: true }); // Hapus semua table lama dan recreate

    // 🚗 Seed Driver
    await Driver.bulkCreate([
      { nama: 'Zoel', plat: 'KT 1234 ZV' },
      { nama: 'Wieta', plat: 'KT 1235 ZV' },
      { nama: 'Tams', plat: 'KT 1236 ZV' },
      { nama: 'Paman', plat: 'KT 1237 ZV' },
    ]);

    // 🚚 Seed Route
    await Route.bulkCreate([
      { point_awal: 'A', point_akhir: 'B', jarak: 5, waktu_standart: 20, price_per_km: 10000, total_cost: 50000 },
      { point_awal: 'A', point_akhir: 'C', jarak: 8, waktu_standart: 22, price_per_km: 11000, total_cost: 88000 },
      { point_awal: 'A', point_akhir: 'D', jarak: 10, waktu_standart: 25, price_per_km: 10000, total_cost: 100000 },
      { point_awal: 'B', point_akhir: 'C', jarak: 4, waktu_standart: 15, price_per_km: 10000, total_cost: 40000 },
      { point_awal: 'B', point_akhir: 'D', jarak: 15, waktu_standart: 30, price_per_km: 13000, total_cost: 195000 },
      { point_awal: 'C', point_akhir: 'D', jarak: 20, waktu_standart: 40, price_per_km: 11000, total_cost: 220000 },
    ]);

    // 📊 Seed Transaksi (Contoh data, isi sesuai tabel Excel untuk detail full)
    await Transaksi.bulkCreate([
      {
        nama_driver: 'Zoel',
        plat_driver: 'KT 1234 ZV',
        point_start: 'A',
        point_end: 'B',
        distance: 5,
        date: '2025-07-08',
        actual_time: 24,
        waktu_standart: 20,
        total_cost: 50000,
        telat: 4
      },
      {
        nama_driver: 'Zoel',
        plat_driver: 'KT 1234 ZV',
        point_start: 'A',
        point_end: 'C',
        distance: 8,
        date: '2025-07-08',
        actual_time: 15,
        waktu_standart: 22,
        total_cost: 88000,
        telat: 0
      },
      {
        nama_driver: 'Wieta',
        plat_driver: 'KT 1235 ZV',
        point_start: 'C',
        point_end: 'D',
        distance: 20,
        date: '2025-07-08',
        actual_time: 44,
        waktu_standart: 40,
        total_cost: 220000,
        telat: 4
      },
      // 🔁 Tambahkan seluruh transaksi sesuai excelmu...
    ]);

    console.log('✅ Seeding selesai!');
  } catch (error) {
    console.error('❌ Error saat seeding:', error);
  } finally {
    await sequelize.close();
  }
}

seed();

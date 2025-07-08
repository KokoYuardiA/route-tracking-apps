CREATE TABLE Drivers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nama TEXT NOT NULL,
  plat TEXT NOT NULL
);

CREATE TABLE Routes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  point_awal TEXT NOT NULL,
  point_akhir TEXT NOT NULL,
  jarak REAL NOT NULL,
  waktu_standart INTEGER NOT NULL,
  price_per_km REAL NOT NULL,
  total_cost REAL NOT NULL
);

CREATE TABLE Transaksis (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nama_driver TEXT NOT NULL,
  plat_driver TEXT NOT NULL,
  point_start TEXT NOT NULL,
  point_end TEXT NOT NULL,
  distance REAL NOT NULL,
  date DATE NOT NULL,
  actual_time INTEGER NOT NULL,
  waktu_standart INTEGER NOT NULL,
  total_cost REAL NOT NULL,
  telat INTEGER NOT NULL
);

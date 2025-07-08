const express = require('express');
const router = express.Router();
const driverController = require('../controllers/driverController');
const routeController = require('../controllers/routeController');
const transaksiController = require('../controllers/transaksiController');
const reportController = require('../controllers/reportController');

// Driver
router.post('/drivers', driverController.createDriver);
router.get('/drivers', driverController.getDrivers);
router.delete('/drivers/:id', driverController.deleteDriver);


// Route
router.post('/routes', routeController.createRoute);
router.get('/routes', routeController.getRoutes);
router.delete('/routes/:id', routeController.deleteRoute);

// Transaksi
router.post('/transaksis', transaksiController.createTransaksi);
router.get('/transaksis', transaksiController.getTransaksis);
router.delete('/transaksis/:id', transaksiController.deleteTransaksi);

// Reports
router.get('/reports/paling-sering-telat', reportController.driverPalingSeringTelat);
router.get('/reports/telat-kedua', reportController.driverTelatKedua);
router.get('/reports/cost-tertinggi-kedua', reportController.costTertinggiKedua);
router.get('/reports/jarak-tempuh-terjauh', reportController.jarakTempuhTerjauh);
router.get('/reports/jumlah-trip', reportController.jumlahTripPerDriver);

module.exports = router;

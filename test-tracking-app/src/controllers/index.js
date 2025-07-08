const { Driver, Trip, Report } = require('../models');

// Create a new driver
exports.createDriver = async (req, res) => {
    try {
        const driver = await Driver.create(req.body);
        res.status(201).json(driver);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Read all drivers
exports.readDrivers = async (req, res) => {
    try {
        const drivers = await Driver.findAll();
        res.status(200).json(drivers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a driver
exports.updateDriver = async (req, res) => {
    try {
        const driver = await Driver.update(req.body, {
            where: { id: req.params.id }
        });
        if (driver[0] === 0) {
            return res.status(404).json({ error: 'Driver not found' });
        }
        res.status(200).json({ message: 'Driver updated successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a driver
exports.deleteDriver = async (req, res) => {
    try {
        const result = await Driver.destroy({
            where: { id: req.params.id }
        });
        if (result === 0) {
            return res.status(404).json({ error: 'Driver not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Report: Driver paling sering telat
exports.reportLateDrivers = async (req, res) => {
    try {
        const lateDrivers = await Trip.findAll({
            attributes: ['driverId', [sequelize.fn('COUNT', sequelize.col('id')), 'lateCount']],
            where: { isLate: true },
            group: ['driverId'],
            order: [[sequelize.fn('COUNT', sequelize.col('id')), 'DESC']],
            limit: 2
        });
        res.status(200).json(lateDrivers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Report: Driver dengan cost tertinggi kedua
exports.reportHighestCostDriver = async (req, res) => {
    try {
        const highestCostDrivers = await Trip.findAll({
            attributes: ['driverId', [sequelize.fn('SUM', sequelize.col('cost')), 'totalCost']],
            group: ['driverId'],
            order: [[sequelize.fn('SUM', sequelize.col('cost')), 'DESC']],
            limit: 2
        });
        res.status(200).json(highestCostDrivers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Report: Driver dengan jarak tempuh terjauh
exports.reportFarthestDriver = async (req, res) => {
    try {
        const farthestDriver = await Trip.findAll({
            attributes: ['driverId', [sequelize.fn('SUM', sequelize.col('distance')), 'totalDistance']],
            group: ['driverId'],
            order: [[sequelize.fn('SUM', sequelize.col('distance')), 'DESC']],
            limit: 1
        });
        res.status(200).json(farthestDriver);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Report: Jumlah trip per driver
exports.reportTripCountPerDriver = async (req, res) => {
    try {
        const tripCounts = await Trip.findAll({
            attributes: ['driverId', [sequelize.fn('COUNT', sequelize.col('id')), 'tripCount']],
            group: ['driverId']
        });
        res.status(200).json(tripCounts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
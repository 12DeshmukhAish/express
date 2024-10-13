const express = require('express');
const router = express.Router();
const equipmentController = require('../controllers/equipmentController');
const auth = require('../middleware/auth');

console.log('Setting up equipment routes');

router.post('/', auth, (req, res, next) => {
  console.log('Received POST request to /api/equipment');
  console.log('Request body:', req.body);
  console.log('Request headers:', req.headers);
  equipmentController.addEquipment(req, res, next);
});

router.get('/', (req, res, next) => {
  console.log('Received GET request to /api/equipment');
  equipmentController.getEquipment(req, res, next);
});

module.exports = router;
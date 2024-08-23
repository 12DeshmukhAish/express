const express = require('express');
const router = express.Router();
const equipmentController = require('../controllers/equipmentController');
const auth = require('../middleware/auth');

router.post('/', auth, equipmentController.addEquipment);
router.get('/', equipmentController.getEquipment);

module.exports = router;
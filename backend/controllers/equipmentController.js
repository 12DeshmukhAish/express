const Equipment = require('../models/Equipment');

exports.addEquipment = async (req, res) => {
  try {
    const equipment = new Equipment({
      ...req.body,
      userId: req.user._id,
      ownerName: req.user.fullName,
      address: req.user.address,
      contactNumber: req.user.contactNumber,
    });
    await equipment.save();
    res.status(201).send(equipment);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.find();
    res.send(equipment);
  } catch (error) {
    res.status(500).send(error);
  }
};
const Equipment = require('../models/Equipment');

exports.addEquipment = async (req, res) => {
  try {
    // Check if user data is available in the request
    if (!req.user) {
      console.error('User data not found in request');
      return res.status(401).send({ error: 'User not authenticated' });
    }

    console.log('Attempting to add equipment for user:', req.user);

    const equipment = new Equipment({
      ...req.body,
      userId: req.user.userId, // Changed from _id to userId to match JWT payload
      ownerName: req.user.fullName,
      address: req.user.address,
      contactNumber: req.user.contactNumber,
    });

    await equipment.save();
    console.log('Equipment added successfully:', equipment);
    res.status(201).send(equipment);
  } catch (error) {
    console.error('Error adding equipment:', error);
    res.status(400).send({ error: error.message });
  }
};

exports.getEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.find();
    console.log('Retrieved equipment:', equipment.length, 'items');
    res.send(equipment);
  } catch (error) {
    console.error('Error getting equipment:', error);
    res.status(500).send({ error: 'Internal server error' });
  }
};
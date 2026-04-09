const express = require('express');
const router = express.Router();
const Socket = require('../models/Socket');

router.get('/', async (req, res) => {
  try {
    const sockets = await Socket.find().sort({ createdAt: -1 });
    res.json(sockets);
  } catch (error) {
    res.status(500).json({ message: 'Could not fetch sockets' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const socket = await Socket.findById(req.params.id);
    if (!socket) {
      return res.status(404).json({ message: 'Socket not found' });
    }
    res.json(socket);
  } catch (error) {
    res.status(500).json({ message: 'Could not fetch socket' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newSocket = new Socket(req.body);
    const savedSocket = await newSocket.save();
    res.status(201).json(savedSocket);
  } catch (error) {
    res.status(400).json({ message: 'Could not create socket', error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedSocket = await Socket.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!updatedSocket) {
      return res.status(404).json({ message: 'Socket not found' });
    }

    res.json(updatedSocket);
  } catch (error) {
    res.status(400).json({ message: 'Could not update socket', error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedSocket = await Socket.findByIdAndDelete(req.params.id);

    if (!deletedSocket) {
      return res.status(404).json({ message: 'Socket not found' });
    }

    res.json({ message: 'Socket deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Could not delete socket' });
  }
});

module.exports = router;
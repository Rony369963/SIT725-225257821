const express = require('express');
const router = express.Router();
const Socket = require('../models/Socket');

// GET all sockets
router.get('/', async (req, res) => {
  try {
    const sockets = await Socket.find();
    res.json(sockets);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve sockets.' });
  }
});

// GET a single socket by ID
router.get('/:id', async (req, res) => {
  try {
    const socket = await Socket.findById(req.params.id);
    if (!socket) return res.status(404).json({ error: 'Socket not found.' });
    res.json(socket);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve socket.' });
  }
});

// POST - Add a new socket
router.post('/', async (req, res) => {
  try {
    const newSocket = new Socket(req.body);
    const saved = await newSocket.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT - Update a socket by ID
router.put('/:id', async (req, res) => {
  try {
    req.body.lastUpdated = Date.now();
    const updated = await Socket.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ error: 'Socket not found.' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE - Remove a socket by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Socket.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Socket not found.' });
    res.json({ message: 'Socket deleted successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete socket.' });
  }
});

module.exports = router;
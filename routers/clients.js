require('dotenv').config();
const express = require('express');
const middlewares = require('../middlewares/validation');

const Bugs = require('../models/Bugs.js');

const router = express.Router();

// Listando todas as pessoas
router.get('/', async (_req, res) => {
  const bugs = await Bugs.getAll();
  res.status(200).json(bugs);
});

router.post('/', middlewares.isValidName, async (req, res) => {
  const { name } = req.body;
  await Bugs.create(name);
  res.status(201).json({ message: "Buguinhu adicionado com sucesso" });
});

// Cadastrando nova pessoa
router.put('/:id', middlewares.isValidName, async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const bugs = await Bugs.update(name, id);
  res.status(201).json(bugs);
  }
);

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Bugs.remove(id);
  res.status(201).json({ message: "Buguinhu removido com sucesso" });
})

module.exports = router;

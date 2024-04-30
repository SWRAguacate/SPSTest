const express = require('express');
const PokemonService = require('../services/pokemon.service');
const service = new PokemonService();
const validatorHandler = require('../middlewares/validator.handler');
const { getIdPokemonDto } = require('../middlewares/dtos/pokemon.dto');
const router = express.Router();
require('dotenv').config();

// Ruta para verificar la disponibilidad de la API
router.get('/health', async (req, res, next) => {
  try {
    res.json({
      'success': true,
      'message': 'API disponible',
    });
  } catch (error) {
    next(error);
  }
});

// Ruta para obtener todas las habilidades
router.get('/', async (req, res, next) => {
  try {
    const pokemones = await service.find(`${process.env.BASEAPI}ability`);
    res.json({
      'success': true,
      'message': 'Habilidades encontradas',
      'Data': pokemones
    });
  } catch (error) {
    next(error);
  }
});

// Ruta para obtener una habilidad específica por su ID
router.get('/:id', validatorHandler(getIdPokemonDto, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const pokemon = await service.findOne(`${process.env.BASEAPI}ability`, id);
    res.json({
      'success': true,
      'message': 'Habilidad encontrada',
      'Data': pokemon
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

const express = require('express');
const pokemonRouter = require('./pokemon.router');
const abilityRouter = require('./ability.router');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/pokemon', pokemonRouter);
    router.use('/ability', abilityRouter);
}

module.exports = routerApi;

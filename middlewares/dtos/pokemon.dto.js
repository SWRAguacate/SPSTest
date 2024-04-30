const Joi = require('joi');

//CRITERIOS DE LOS CAMPOS
const idValidation = Joi.string();

//CUANDO REQUERIMOS UN ID
const getIdPokemonDto = Joi.object({
  id: idValidation.required()
});

module.exports = { getIdPokemonDto };

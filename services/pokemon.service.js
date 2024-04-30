const boom = require('@hapi/boom');
const axios = require('axios');

class PokemonService {
  constructor() {}

  async find(url) {
    try {
      // Realizar solicitud a la URL especificada para obtener datos
      const response = await axios.get(url);

      // Extraer los datos de los Pokémon de la respuesta
      const pokemones = response.data;

      return pokemones;
    } catch (error) {
      // Manejar errores si ocurren durante la solicitud
      throw boom.badRequest('Error al obtener datos de los Pokémon', error);
    }
  }

  async findOne(url, id) {
    try {
      // Realizar solicitud a la URL especificada para obtener datos específicos
      const response = await axios.get(`${url}/${id}`);

      // Extraer los datos de la respuesta
      const pokemon = response.data;

      return pokemon;
    } catch (error) {
      // Manejar errores si ocurren durante la solicitud
      throw boom.notFound('Pokemon no encontrado', error);
    }
  }
}

module.exports = PokemonService;

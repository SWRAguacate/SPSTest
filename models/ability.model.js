class PokemonAbility {
  constructor(count, next, previous, results) {
    this.count = count;
    this.next = next;
    this.previous = previous;
    this.results = results;
  }
}

class Ability {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
}

module.exports = { PokemonAbility, Ability };

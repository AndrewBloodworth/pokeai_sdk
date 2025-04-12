import { PokeAPI } from "./src";

(async () => {
  const client = new PokeAPI();
  const { classes: pikachu } = await client.pokemon.findOne("pikachu");
  console.log(pikachu?.name); // => "pikachu"

  const { classes: bulbasaur } = await client.pokemon.findOne(1);
  console.log(bulbasaur?.name); // => "bulbasaur"
  let pokemons = await client.pokemon.findAll({ limit: 20 });

  while (pokemons) {
    console.log(pokemons.classes?.results.length); // => 20
    pokemons = await pokemons.next();
    break;
  }

  const { classes: generationI } = await client.generation.findOne(
    "generation-i"
  );
  console.log(generationI?.name); // => "generation-i"

  const { classes: generationII } = await client.generation.findOne(2);
  console.log(generationII?.name); // => "generation-ii"

  let generations = await client.generation.findAll({ limit: 20 });

  while (generations) {
    console.log(generations.classes?.count); // => 9
    generations = await generations.next();
  }
})();
